import { model, Schema } from "mongoose";
import { TUser } from "./auth.interface";
const userSchema = new Schema<TUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = model<TUser>("user", userSchema);
