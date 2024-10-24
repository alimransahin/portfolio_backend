import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { authService } from "./auth.service";
import config from "../../config";

// sign in
const signIn = catchAsync(async (req, res) => {
  const { accessToken, refreshToken } = await authService.signIn(req.body);
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.node_env === "production",
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: {
      accessToken,
      refreshToken,
    },
  });
});
const getUserProfile = catchAsync(async (req, res) => {
  const result = await authService.getSingleUserFromDB(req.params.email);
  if (!result || (Array.isArray(result) && result.length === 0)) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No user found",
      data: [],
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "A User Profile retrieved successfully",
    data: result,
  });
});

export const authController = {
  signIn,
  getUserProfile,
};
