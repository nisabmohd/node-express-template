import { config } from "dotenv";
config();
import expressServer from "./app";
import { connectToDB } from "./utils/connectDB";
import { validateEnv } from "./utils/validationEnv";
validateEnv();

const PORT = process.env.PORT;

connectToDB()
  .then(() => {
    console.log("Database connection successful");
    return expressServer.listen(PORT);
  })
  .then(() => {
    console.log("Server started at port", PORT);
  })
  .catch((err) => {
    console.error(err);
  });
