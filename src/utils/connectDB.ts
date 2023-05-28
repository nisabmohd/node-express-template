import { connect } from "mongoose";

export const connectToDB = async () => {
  return connect(process.env.MONGO_URI!);
};
