import Router from "express";
import { config } from "dotenv";
config();
import db from "../db/db-connection.js";


const router = Router();

//get all blogs posts to display sorted with recent blogs
router.post("/", async (req, res) => {
    try {
  // fetching data of favorite parks of a user from database
  const {park , user} = req.body
  console.log(park , user, "checkuserSub******")
    const favorites   = await db.query('Insert into favorites (park_code, sub_user) values ($1, $2) RETURNING *', [park,user]);
    res.send(favorites[0]);
    console.log(favorites, "check favorites updated")
        } 
    catch (e) {
      console.log(e)
      return res.status(400).json({ e });
    }
  });

  router.delete("/:user/:selectedPark", async (req, res) => {
    try {
  // fetching data of favorite parks of a user from database
  const user = req.params.user
  const park = req.params.selectedPark
  console.log(park , user, "checkuserSub delete******")
    const favorites  = await db.query('Delete from favorites where sub_user=$1 and park_code=$2 RETURNING *', [user,park]);
    res.send(favorites);
        } 
    catch (e) {
      console.log(e)
      return res.status(400).json({ e });
    }
  });

  router.get("/:user/:selectedPark", async (req, res) => {
    try {     
        let userDetails = req.params.user
        let selectedParkDetails = req.params.selectedPark
        console.log(userDetails,selectedParkDetails, "user for which favorites required")
        const favorites  = await db.query('SELECT * FROM favorites where sub_user=$1 and park_code=$2', [userDetails, selectedParkDetails]);
    res.send(favorites);
    }
    catch {
        // console.log(e)
      return res.status(400).json();
    }
})

router.get("/:user", async (req, res) => {
    try {     
        let userDetails = req.params.user

        const favorites  = await db.query('SELECT park_code FROM favorites where sub_user=$1', [userDetails]);
    res.send(favorites);
    }
    catch {
        // console.log(e)
      return res.status(400).json();
    }
})


  export default router;