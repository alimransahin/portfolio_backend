import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    name: { type: String, required: true },
    live: { type: String, required: true },
    client: { type: String, required: true },
    server: { type: String, required: true },
    technology: { type: [String], required: true },
    feature: { type: [String], required: true },
    mainImage: { type: String, required: true },
    images: { type: [String], required: true },
    description: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

projectSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
projectSchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
projectSchema.pre("findOneAndUpdate", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
projectSchema.pre("findOneAndDelete", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Project = model<TProject>("project", projectSchema);
