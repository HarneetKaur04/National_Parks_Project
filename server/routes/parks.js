import Router from "express";
import { config } from "dotenv";
config();

const router = Router();

//end point for http get request for all national parks from API
router.get("/", async (req, res) => {
  try {
    // fetching data from API for all parks and setting limit to 468 as default is only 50
    let allParksurl = `https://developer.nps.gov/api/v1/parks?parkCode=&limit=468&sort=&api_key=${process.env.REACT_APP_API_KEY}`
    await fetch(allParksurl)
      .then(response => response.json())
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
    let singleParksurl = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&limit=1&sort=&api_key=${process.env.REACT_APP_API_KEY}`
    await fetch(singleParksurl)
      .then(response => response.json())
      .then(data => {
        res.send(data)
        console.log(data)
      })
  }
  catch (e) {
    console.log(e)
    return res.status(400).json({ e });
  }
});

export default router;