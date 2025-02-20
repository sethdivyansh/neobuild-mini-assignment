import { readPdfText } from "pdf-text-reader";

export const pdfTextReader = async (url: string) => {
  console.log(url);
  try {
    const pdfText: string = await readPdfText({ url });
    return pdfText;
  } catch (error) {
    if ((error as Error).message === "Invalid PDF structure.") {
      console.error("Invalid PDF structure.");
    } else {
      console.error(error);
    }
  }
};
