import db from "../db/db-connection.js";
import Router from "express";
import { config } from "dotenv";
config();

// creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My template ExpressJS' });
  });
  
  // create the get request
  app.get('/api/students', cors(), async (req, res) => {
  
    try {
      const { rows: students } = await db.query('SELECT * FROM students');
      res.send(students);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });
  
  // create the POST request
  app.post('/api/students', cors(), async (req, res) => {
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };
    console.log([newUser.firstname, newUser.lastname]);
    const result = await db.query(
      'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
      [newUser.firstname, newUser.lastname],
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
  });
  
  //A put request - Update a student 
  app.put('/api/students/:studentId', cors(), async (req, res) =>{
    console.log(req.params);
    //This will be the id that I want to find in the DB - the student to be updated
    const studentId = req.params.studentId
    const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
    console.log("In the server from the url - the student id", studentId);
    console.log("In the server, from the react - the student to be edited", updatedStudent);
    // UPDATE students SET lastname = "something" WHERE id="16";
    const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
    const values = [updatedStudent.lastname, updatedStudent.firstname];
    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(e){
      console.log(e);
      return res.status(400).json({e})
    }
  })
  
  // delete request
  app.delete('/api/students/:studentId', cors(), async (req, res) =>{
    const studentId = req.params.studentId;
    //console.log("From the delete request-url", req.params);
    await db.query('DELETE FROM students WHERE id=$1', [studentId]);
    res.status(200).end();
  
  });
  
  
  // create the POST request for a new user
  // CREATE TABLE users (
  // 	ID SERIAL PRIMARY KEY,
  // 	lastname varchar(255),
  // 	firstname varchar(255),
  //     email varchar(255), 
  //     sub varchar(255));
  app.post('/api/me', cors(), async (req, res) => {
    const newUser = {
      lastname: req.body.family_name,
      firstname: req.body.given_name,
      email: req.body.email,
      sub: req.body.sub
  
    }
    //console.log(newUser);
  
    const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
    const valuesEmail = [newUser.email]
    const resultsEmail = await db.query(queryEmail, valuesEmail);
    if(resultsEmail.rows[0]){
      console.log(`Thank you ${resultsEmail.rows[0].firstname} for comming back`)
    } else{
    const query = 'INSERT INTO users(lastname, firstname, email, sub) VALUES($1, $2, $3, $4) RETURNING *'
    const values = [newUser.lastname, newUser.firstname, newUser.email, newUser.sub]
    const result = await db.query(query, values);
    console.log(result.rows[0]);
  
    }
  
  });