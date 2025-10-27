import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.MONGODB_URI || "";
const client = new MongoClient(connectionString);

let db;
try {
  await client.connect();
  console.log("mongoDB is CONNECTED!! :)");
  // Use one DB for both collections as the guide shows
  db = client.db("users");
} catch (e) {
  console.error(e);
}

export default db;