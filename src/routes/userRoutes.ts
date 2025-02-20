import { Router } from "express";
import { loginUser } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { processAndStoreApplicantData } from "../controllers/applicantController.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Server is running" });
});

router.route("/login").post(loginUser);
router
  .route("/processApplicantData")
  .post(verifyToken, processAndStoreApplicantData);

export default router;
