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

export default router;