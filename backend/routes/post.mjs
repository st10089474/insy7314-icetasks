import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import checkauth from "../check-auth.mjs";

const router = express.Router();

// Get all records
router.get("/", async (req, res) => {
  const collection = await db.collection("posts");
  const results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// Create a new record, protected
router.post("/upload", checkauth, async (req, res) => {
  const newDocument = {
    user: req.body.user,
    content: req.body.content,
    image: req.body.image,
  };
  const collection = await db.collection("posts");
  const result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Update by id, protected
router.patch("/:id", checkauth, async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      name: req.body.name,
      comment: req.body.comment,
    },
  };
  const collection = await db.collection("posts");
  const result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

export default router;