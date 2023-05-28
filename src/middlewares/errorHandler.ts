import { NextFunction, Request, Response } from "express";
import ServerError from "../utils/ServerError";
import { ZodError } from "zod";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  if (err instanceof ServerError) {
    return res.status(err.statusCode).json({ message: err.message });
  } else if (err instanceof ZodError) {
    return res.status(400).json({ message: err });
  }
  res.status(500).json({ message: err.message || "Internal server error" });
};
