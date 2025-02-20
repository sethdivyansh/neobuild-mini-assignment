import { Request, Response } from "express";
import { readPdfText } from "pdf-text-reader";

export const pdfTextReader = async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    const pdfText: string = await readPdfText({ url });
    if (!pdfText) {
      res.status(500).send({ error: "No text found in the pdf" });
      return;
    }
    res.status(200).send({ pdfText });
  } catch (e) {
    res.status(500).send({ error: (e as Error).message });
  }
};
