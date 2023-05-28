import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
  fullName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
});

type inferUserSchema = InferSchemaType<typeof userSchema>;
const User = model<inferUserSchema>("users", userSchema);
export default User;
