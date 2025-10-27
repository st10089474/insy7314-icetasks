import jwt from "jsonwebtoken";

const checkauth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET);
    next(); // pass control to the next handler
  } catch (error) {
    return res.status(401).json({ message: "token invalid" });
  }
};

export default checkauth;