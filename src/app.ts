import express, { NextFunction, Request, Response, Express } from "express";
import corsConfig from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import { logger } from "./middlewares/requestLogger";

import authRouter from "./routers/user.route";

const app: Express = express();
app.use(
  corsConfig({
    // options
  })
);
app.use(express.json());

// uncomment below line if using formdata
// app.use(Express.urlencoded({extended:true}))

if (process.env.LOGGER) app.use(logger);

app.get(
  "/health-check",
  (req: Request, res: Response, next: NextFunction): Response => {
    return res.status(200).send("OK");
  }
);

// add your routers

app.use("/auth", authRouter);

//error-handler middleware
app.use(errorHandler);

export default app;
