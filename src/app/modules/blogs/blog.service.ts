import { TBlogPost } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogIntoDB = async (payload: TBlogPost) => {
  const newBlog = await Blog.create(payload);
  return newBlog;
};
const getAllBlogFromDB = async () => {
  const result = await Blog.find();
  return result;
};
const getSingleBlogFromDB = async (id: string) => {
  const result = await Blog.findOne({ _id: id });
  return result;
};
const updateBlogIntoDB = async (id: string, payload: Partial<TBlogPost>) => {
  const result = await Blog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteBlogFromDB = async (id: string) => {
  const deleteInfo = {
    isDeleted: true,
  };
  const result = await Blog.findOneAndUpdate({ _id: id }, deleteInfo, {
    new: true,
  });
  return result;
};

export const blogService = {
  createBlogIntoDB,
  getAllBlogFromDB,
  getSingleBlogFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
