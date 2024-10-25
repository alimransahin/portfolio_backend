import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { skillService } from "./skills.service";

const createSkill = catchAsync(async (req, res) => {
  const result = await skillService.createSkillIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Skill created successfully",
    data: result,
  });
});
const getAllSkill = catchAsync(async (req, res) => {
  const result = await skillService.getAllSkillFromDB();
  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Skill found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skills retrieved successfully",
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const result = await skillService.updateSkillIntoDB(req.params.id, req.body);
  if (!result || (Array.isArray(result) && result.length === 0)) {
    // If no data is found, send this response
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Skill found",
      data: [],
    });
  }
  // If data is found, send the success response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill updated succeskkkkksfully",
    data: result,
  });
});
const deleteSkill = catchAsync(async (req, res) => {
  const result = await skillService.deleteSkillFromDB(req.params.id);

  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No Skill found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill Deleted successfully",
    data: result,
  });
});

export const skillController = {
  createSkill,
  getAllSkill,
  updateSkill,
  deleteSkill,
};
