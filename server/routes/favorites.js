import Router from "express";
import { config } from "dotenv";
config();
import db from "../db/db-connection.js";


const router = Router();

//get all blogs posts to display sorted with recent blogs
router.post("/", async (req, res) => {
    try {
  // fetching data of favorite parks of a user from database
  const user_sub1 = req.body
  console.log(user_sub1 , "checkuserSub******")
    const favorites  = await db.query('SELECT * FROM favorites where sub_user=$1', [user_sub1]);
    res.send(favorites);
res.status(200).json(user_sub1)
        } 
    catch (e) {
      console.log(e)
      return res.status(400).json({ e });
    }
  });

  router.get("/:userSub", async (req, res) => {
    try {
        let subV = req.params.userSub
        console.log(subV, "checkparams")
        
        const favorites  = await db.query('SELECT * FROM favorites where sub_user=$1', [subV]);
    res.send(favorites);
    }
    catch {
        console.log(e)
      return res.status(400).json({ e });
    }
})


  export default router;