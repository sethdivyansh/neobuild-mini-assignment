import mongoose from "mongoose";

interface Education {
  degree: string;
  branch: string;
  institution: string;
  year: number;
}

interface Experience {
  job_title: string;
  company: string;
  start_date: string;
  end_date: string;
}

interface Applicant extends mongoose.Document {
  name: string;
  email: string[];
  education: Education[];
  experience: Experience[];
  skills: string[];
  summary: string;
}

const applicantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: [
      {
        type: String,
        lowercase: true,
      },
    ],
    education: [
      {
        degree: {
          type: String,
        },
        branch: {
          type: String,
        },
        institution: {
          type: String,
        },
        year: {
          type: Number,
          min: 1900,
          max: new Date().getFullYear(),
        },
      },
    ],
    experience: [
      {
        job_title: {
          type: String,
        },
        company: {
          type: String,
        },
        start_date: {
          type: String,
        },
        end_date: {
          type: String,
        },
      },
    ],
    skills: [
      {
        type: String,
      },
    ],
    summary: {
      type: String,
    },
  },
  {
    collection: "applicant", // Set collection name to "applicant" to prevent Mongoose pluralization.
  }
);

export const Applicant: mongoose.Model<Applicant> = mongoose.model<Applicant>(
  "applicant",
  applicantsSchema
);
