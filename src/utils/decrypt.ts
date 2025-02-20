import CryptoJS from "crypto-js";
import { ENCRYPTION_SECRET } from "../constants.js";

export const decryptData = (encryptedData: string): string => {
  if (!ENCRYPTION_SECRET) {
    throw new Error("ENCRYPTION_SECRET is not defined");
  }
  const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
};
