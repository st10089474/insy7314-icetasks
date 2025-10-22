import express from "express";

const app = express();
const urlprefix = "/api";

app.use(express.json());

app.get(urlprefix + "/", (req, res) => {
  res.send("I am really happy that I have figured this out (ST10089474)");
});

app.get(urlprefix + "/orders", (req, res) => {
  const orders = [
    { id: "1", name: "Orange" },
    { id: "2", name: "Apple" },
    { id: "3", name: "Pear" }
  ];
  res.json({ message: "Fruits", orders });
});

export default app;