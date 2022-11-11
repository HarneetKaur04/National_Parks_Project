import db from "../db/db-connection.js";
import cors from "cors";
import Router from "express";
import { config } from "dotenv";
config();


const router = Router();

  router.post('/', cors(), async (req, res) => {
    const newUser = {
      lastname: req.body.family_name,
      firstname: req.body.given_name,
      email: req.body.email,
      sub: req.body.sub
  
    }
    console.log(newUser);
  
    const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
    const valuesEmail = [newUser.email]
    const resultsEmail = await db.query(queryEmail, valuesEmail);
    console.log(resultsEmail, "resultsEmail****")
    if(resultsEmail[0]){
      console.log(`Thank you ${resultsEmail[0].firstname} for coming back`)
    } else {
    const query = 'INSERT INTO users(lastname, firstname, email, sub) VALUES($1, $2, $3, $4) RETURNING *'
    const values = [newUser.lastname, newUser.firstname, newUser.email, newUser.sub]
    const result = await db.query(query, values);
    console.log(result[0]);
  
    }
  
  });


  export default router;