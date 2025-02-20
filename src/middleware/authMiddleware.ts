import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../constants.js";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).send({ error: "Token missing" });
    return;
  }

  try {
    const username = jwt.verify(token, JWT_SECRET_KEY!);
    if (!username) {
      res.status(401).send({ error: "Token invalid" });
      return;
    }
    next();
  } catch (error) {
    res.status(401).send({ error: "Invalid token" });
  }
};
