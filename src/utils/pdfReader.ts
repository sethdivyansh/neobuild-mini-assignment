import { readPdfText } from "pdf-text-reader";

export const pdfTextReader = async (url: string) => {
  try {
    const pdfText: string = await readPdfText({ url });
    if (!pdfText) {
      return { status: 500, error: "No text found in the pdf" };
    }
    return { pdfText };
  } catch (e) {
    return { status: 500, error: (e as Error).message };
  }
};
