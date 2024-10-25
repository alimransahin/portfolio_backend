import { model, Schema } from "mongoose";
import { TSkill } from "./skills.interface";

const SkillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

SkillSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
SkillSchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
SkillSchema.pre("findOneAndUpdate", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
SkillSchema.pre("findOneAndDelete", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Skill = model<TSkill>("skill", SkillSchema);
