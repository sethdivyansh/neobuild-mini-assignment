import { Router } from "express";
import { loginUser } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { pdfTextReader } from "../controllers/pdfTextReader.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Server is running" });
});

router.route("/login").post(loginUser);
router.route("/readPdf").post(verifyToken, pdfTextReader);

export default router;
