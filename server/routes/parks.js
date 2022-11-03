import db from "../db/db-connection.js";
import Router from "express";
import { config } from "dotenv";
config();

// checking if API key worksgi
// console.log(process.env.REACT_APP_API_KEY)a

const router = Router();
// console.log(`https://developer.nps.gov/api/v1/parks?limit=100&api_key=${process.env.REACT_APP_API_KEY}`)

//get all blogs posts to display sorted with recent blogs
router.get("/", async (req, res) => {
  try {
// fetching data from API for all parks and setting limit to 100
    let allParksurl = `https://developer.nps.gov/api/v1/parks?parkCode=&limit=150&sort=&api_key=${process.env.REACT_APP_API_KEY}`
    // console.log(allParksurl, "allParksurl")

    await fetch(allParksurl)
    .then(response => response.json())
      // console.log(response)
    .then(data => res.send(data)) 
      } 
  catch (e) {
    console.log(e)
    return res.status(400).json({ e });
  }
});

// end point for single park selected by user. params will change to user input through http request
router.get("/:parkCode", async (req, res) => {
  try {
    const parkCode = req.params.parkCode
    console.log(parkCode, "parkCodeBackend")

    let singleParksurl = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&limit=1&sort=&api_key=${process.env.REACT_APP_API_KEY}`
    // console.log(singleParksurl, "singleParksurl")

    await fetch(singleParksurl)
    .then(response => response.json())
      // console.log(response)
    .then(data => {
      res.send(data)
      console.log(data)}) 
      } 
  catch (e) {
    console.log(e)
    return res.status(400).json({ e });
  }
});


export default router;