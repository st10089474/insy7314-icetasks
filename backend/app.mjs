import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import posts from "./routes/post.mjs";
import users from "./routes/user.mjs";

const app = express();

app.use(cors());
app.use(express.json());

// simple CORS headers like the screenshots
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use("/post", posts);
app.use("/user", users);

export default app;