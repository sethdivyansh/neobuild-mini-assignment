import { Request, Response } from "express";
import { search } from "../utils/search.js";

export const searchApplicants = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    console.log(name);
    if (!name) {
      res.status(400).send({ error: "Name is required" });
      return;
    }
    const { status, applicants } = await search(name as string);

    res.status(status).send({ applicants });
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
};
