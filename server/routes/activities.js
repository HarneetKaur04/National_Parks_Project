// import db from "../db/db-connection.js";
import Router from "express";
import { config } from "dotenv";
config();


const router = Router();

//get all activities to display by fetching from national park API
router.get("/", async (req, res) => {
  try {
// fetching data from API for all parks and setting limit to 100
    let allactivitiessurl = `https://developer.nps.gov/api/v1/activities/parks?id=&api_key=${process.env.REACT_APP_API_KEY}`
    console.log(allactivitiessurl, "allactivitiessurl")

    await fetch(allactivitiessurl)
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
// router.get("/:parkCode", async (req, res) => {
//   try {
//     const parkCode = req.params.parkCode
//     console.log(parkCode, "parkCodeBackend")

//     let singleParksurl = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&limit=1&sort=&api_key=${process.env.REACT_APP_API_KEY}`
//     // console.log(singleParksurl, "singleParksurl")

//     await fetch(singleParksurl)
//     .then(response => response.json())
//       // console.log(response)
//     .then(data => {
//       res.send(data)
//       console.log(data)}) 
//       } 
//   catch (e) {
//     console.log(e)
//     return res.status(400).json({ e });
//   }
// });


export default router;