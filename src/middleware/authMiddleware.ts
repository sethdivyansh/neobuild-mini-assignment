import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../constants.js";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log(token);

  if (!token) {
    return res.status(401).send({ error: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY!);
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).send({ error: "Invalid token" });
  }
};
