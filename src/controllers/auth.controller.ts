import expressAsyncHandler from "express-async-handler";
import type {
  loginRequestType,
  signupRequestType,
} from "../routers/user.route";
import User from "../models/user.model";
// import ServerError from "../utils/ServerError";

export const loginHandler = expressAsyncHandler(async (req, res, next) => {
  // auto prediction for req.body
  const { email, password } = req.body as loginRequestType["body"];
  const { redirect } = req.query as loginRequestType["query"];
  console.log(email, password, redirect);

  // if error throw ServerError
  // throw new ServerError("Test", 404);

  // your logic
  res.send("Logged in");
});

export const signupHandler = expressAsyncHandler(async (req, res, next) => {
  // auto prediction for req.body
  const { email, password, fullName } = req.body as signupRequestType["body"];
  // your logic
  const userToCreate = new User({
    email,
    fullName,
    password,
  });
  const userRef = await userToCreate.save();
  res.send(userRef);
});
