import pgPromise from "pg-promise";
import { config } from "dotenv";
config();

console.log("check" , process.env.DB_URI)

const pgp = pgPromise();
const db = pgp({
  connectionString: process.env.DATABASE_URL,
});

export default db;