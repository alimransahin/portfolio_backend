import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { ExperienceService } from "./experience.service";

const createExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.createExperienceIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Experience created successfully",
    data: result,
  });
});
const getAllExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.getAllExperienceFromDB();
  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Experience found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experiences retrieved successfully",
    data: result,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.updateExperienceIntoDB(
    req.params.id,
    req.body
  );
  if (!result || (Array.isArray(result) && result.length === 0)) {
    // If no data is found, send this response
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Experience found",
      data: [],
    });
  }
  // If data is found, send the success response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience updated successfully",
    data: result,
  });
});
const deleteExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.deleteExperienceFromDB(req.params.id);

  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Experience found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience Deleted successfully",
    data: result,
  });
});

export const experienceController = {
  createExperience,
  getAllExperience,
  updateExperience,
  deleteExperience,
};
