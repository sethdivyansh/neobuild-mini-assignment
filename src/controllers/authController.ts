import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { credentials, JWT_SECRET_KEY } from "../constants.js";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      const token = jwt.sign({ username }, JWT_SECRET_KEY!, {
        expiresIn: "28d",
      });

      res.status(200).json({ JWT: token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
