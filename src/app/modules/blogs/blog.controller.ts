import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { blogService } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  const result = await blogService.createBlogIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});
const getAllBlog = catchAsync(async (req, res) => {
  const result = await blogService.getAllBlogFromDB();
  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Blog found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs retrieved successfully",
    data: result,
  });
});
// const getSingleCar = catchAsync(async (req, res) => {
//   const result = await blogService.getSingleCarFromDB(req.params.id);
//   if (!result || (Array.isArray(result) && result.length === 0)) {
//     return sendResponse(res, {
//       statusCode: httpStatus.NOT_FOUND,
//       success: false,
//       message: "No data found",
//       data: [],
//     });
//   }
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "A Car retrieved successfully",
//     data: result,
//   });
// });
const updateBlog = catchAsync(async (req, res) => {
  const result = await blogService.updateBlogIntoDB(req.params.id, req.body);
  if (!result || (Array.isArray(result) && result.length === 0)) {
    // If no data is found, send this response
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Blog found",
      data: [],
    });
  }
  // If data is found, send the success response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated succeskkkkksfully",
    data: result,
  });
});
const deleteBlog = catchAsync(async (req, res) => {
  const result = await blogService.deleteBlogFromDB(req.params.id);

  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Blog found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Deleted successfully",
    data: result,
  });
});

export const blogController = {
  createBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
};
