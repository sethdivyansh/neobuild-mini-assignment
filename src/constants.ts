import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const DB_NAME = "neobuild";
export const credentials = {
  username: "naval.ravikant",
  password: "05111974",
};

export const PORT = process.env.PORT || 8000;
export const CORS_ORIGIN = process.env.CORS_ORIGIN;
export const JWT_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;
export const MONGODB_URI = `${process.env.MONGODB_URI}/${DB_NAME}`;
export const API_KEY = process.env.API_KEY;
export const ENCRYPTION_SECRET = process.env.ENCRYPTION_SECRET;
