import connectDB from "./db/index.js";
import { app } from "./app.js";
import { PORT } from "./constants.js";

connectDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`Server is running on Port:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed: ", err);
  });
