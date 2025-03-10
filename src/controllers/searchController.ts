import { Request, Response } from "express";
import { search } from "../utils/search.js";
import { decryptData } from "../utils/decrypt.js";

export const searchApplicants = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).send({ error: "Name is required" });
      return;
    }

    const decryptName = decryptData(name as string);

    const { status, applicants } = await search(decryptName as string);

    res.status(status).send({ applicants });
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
};
