import pgPromise from "pg-promise";
import { config } from "dotenv";
config();

const pgp = pgPromise();
const db = pgp({
  connectionString: process.env.DATABASE_URL,
});

export default db;