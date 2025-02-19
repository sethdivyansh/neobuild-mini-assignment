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
  start_date: Date;
  end_date: Date;
}

interface Applicant extends mongoose.Document {
  name: string;
  email: string;
  education: Education;
  experience: Experience;
  skills: string[];
  summary: string;
}

const applicantsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  education: {
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
      required: true,
      min: 1900,
      max: new Date().getFullYear(),
    },
  },
  experience: {
    job_title: {
      type: String,
    },
    company: {
      type: String,
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
  },
  skills: [
    {
      type: String,
    },
  ],
  summary: {
    type: String,
  },
});

export const Applicants: mongoose.Model<Applicant> = mongoose.model<Applicant>(
  "Applicants",
  applicantsSchema
);
