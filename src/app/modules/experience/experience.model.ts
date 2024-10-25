import { model, Schema } from "mongoose";
import { TExperience } from "./experience.interface";

const experienceSchema = new Schema<TExperience>(
  {
    title: { type: String, required: true },
    role: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    description: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

experienceSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
experienceSchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
experienceSchema.pre("findOneAndUpdate", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
experienceSchema.pre("findOneAndDelete", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Experience = model<TExperience>("experience", experienceSchema);
