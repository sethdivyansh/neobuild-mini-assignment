import { Router } from "express";
import { loginUser } from "../controllers/authController.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Server is running" });
});

router.route("/login").post(loginUser);

export default router;
