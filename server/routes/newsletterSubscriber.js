import db from "../db/db-connection.js";
import cors from "cors";
import Router from "express";
import { config } from "dotenv";
config();


const router = Router();

  router.post('/', cors(), async (req, res) => {
    const newSubscriber = {
      name: req.body.firstname,
      email: req.body.email,
    }
    console.log(newSubscriber); // check details of newsletter subscriber
  
    const queryEmail = 'SELECT * FROM newsletter_subscribers WHERE email=$1 LIMIT 1';
    const valuesEmail = [newSubscriber.email]
    const resultsEmail = await db.query(queryEmail, valuesEmail);
    console.log(resultsEmail[0], "resultsEmail****")
    if(resultsEmail[0]){
      console.log(`${resultsEmail[0].name} subscribed already!`)
    } else {
    const query = 'INSERT INTO newsletter_subscribers(name, email) VALUES($1, $2) RETURNING *'
    const values = [newSubscriber.name, newSubscriber.email]
    const result = await db.query(query, values);
    console.log(result[0]);
  
    }
  
  });


  export default router;