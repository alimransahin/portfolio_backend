import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { projectService } from "./project.service";

const createProject = catchAsync(async (req, res) => {
  const result = await projectService.createProjectIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});
const getAllProject = catchAsync(async (req, res) => {
  const result = await projectService.getAllProjectFromDB();
  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Project found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Projects retrieved successfully",
    data: result,
  });
});
// const getSingleCar = catchAsync(async (req, res) => {
//   const result = await projectService.getSingleCarFromDB(req.params.id);
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
const updateProject = catchAsync(async (req, res) => {
  const result = await projectService.updateProjectIntoDB(
    req.params.id,
    req.body
  );
  if (!result || (Array.isArray(result) && result.length === 0)) {
    // If no data is found, send this response
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Project found",
      data: [],
    });
  }
  // If data is found, send the success response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated succeskkkkksfully",
    data: result,
  });
});
const deleteProject = catchAsync(async (req, res) => {
  const result = await projectService.deleteProjectFromDB(req.params.id);

  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Project found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project Deleted successfully",
    data: result,
  });
});

export const projectController = {
  createProject,
  getAllProject,
  updateProject,
  deleteProject,
};
