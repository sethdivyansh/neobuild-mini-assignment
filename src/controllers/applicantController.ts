import { GoogleGenerativeAI } from "@google/generative-ai";
import { Request, Response } from "express";
import { API_KEY } from "../constants.js";
import { Applicant } from "../models/applicantsModel.js";
import { pdfTextReader } from "../utils/pdfReader.js";

export const processAndStoreApplicantData = async (
  req: Request,
  res: Response
) => {
  const { url } = req.body;
  const data = await pdfTextReader(url);

  if (data.status === 500) {
    res.status(500).send({ error: data.error });
    return;
  }

  const genAI = new GoogleGenerativeAI(API_KEY!);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const prompt = `Extract structured resume data from the following text:
  
    ${data.pdfText}

    Format response in JSON:
    {
        "name": <name>,
        "email": <email>
        "education":[
            {
            "degree": <degree>,
            "branch" : <branch>,
            "institution": <institution>,
            "year": <year>
            },
          ]
        "experience":[
            {
            "job_title": <job_title>,
            "company": <company>,
            "start_date": <start_date>,
            "end_date": <end_date>
            },
    ]
        "skills": [
            <skill_1>,
            <skill_2>,
            ...
        ],
        "summary" <write a short summary about the candidate profile>
    }
    Return: Object
    
    if year is in the format "yyyy-yyyy" then consider the first year as start year and the second year as end year in experience field,
    and in education field consider the second year as the year of completion.
    `;

  try {
    const response = await model.generateContent(prompt);
    if (!response) {
      res.status(500).send({ error: "No response from the model" });
      return;
    }
    const rawApplicantData = response.response.text();
    const cleanText = rawApplicantData.replace(/```json\n?|\n?```/g, "").trim();
    if (!cleanText) {
      res.status(500).send({ error: "No text found in the response" });
      return;
    }

    try {
      const applicantJson = JSON.parse(cleanText);
      console.log(applicantJson);
      const applicant = new Applicant(applicantJson);
      await applicant.save();
      res.status(200).json({ message: "Resume saved successfully" });
    } catch (error) {
      console.error("Invalid JSON from AI:", (error as Error).message);
      res.status(500).send({ error: "Failed to parse AI response" });
    }
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
};
