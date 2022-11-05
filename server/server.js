import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import favorite from "./routes/favorite.js";
import parks from "./routes/parks.js";
import activities from "./routes/activities.js";
import user from "./routes/user.js";
import './db/db-connection.js';

// set port and listen for requests
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Backend Running' });
});

// app.use("/", allRouter);
app.use("/parks", parks);
app.use("/activities", activities);
// app.use("/favorite", favorite);
app.use("/user", user);


// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
