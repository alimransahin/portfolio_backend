import { model, Schema } from "mongoose";
import { TBlogPost } from "./blog.interface";

const blogSchema = new Schema<TBlogPost>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true, default: "admin" },
    content: { type: String, required: true },
    tags: { type: [String], default: [] },
    imageUrl: { type: String },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

blogSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
blogSchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
blogSchema.pre("findOneAndUpdate", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
blogSchema.pre("findOneAndDelete", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Blog = model<TBlogPost>("blog", blogSchema);
