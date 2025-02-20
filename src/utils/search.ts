import { Applicant } from "../models/applicantsModel.js";

export const search = async (name: string) => {
  try {
    const names = await Applicant.find({
      name: { $regex: new RegExp(name, "i") },
    });

    if (names.length === 0) {
      return { status: 404, message: "No applicant found" };
    }

    return { status: 200, applicants: names };
  } catch (error) {
    return { status: 500, error: (error as Error).message };
  }
};
