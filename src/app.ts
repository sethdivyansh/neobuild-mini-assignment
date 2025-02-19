import express from "express";
import cors from "cors";
import routes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import { CORS_ORIGIN } from "./constants.js";

const app = express();
app.use(bodyParser.json());

app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use("/api/v1", routes);

export { app };
