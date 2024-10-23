import httpStatus from "http-status";
import config from "../../config";

import { createToken } from "../utils/verifyJWT";
import { TUser } from "./auth.interface";
import { User } from "./auth.model";
import AppError from "../../errors/AppError";

// sign in
const signIn = async (payload: TUser): Promise<any> => {
  const user = await User.findOne({ email: [payload.email] }).select(
    "+password"
  );
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User Not Found!");
  }

  if (payload.password != user.password) {
    throw new AppError(httpStatus.CONFLICT, "Password Not Matched");
  }

  const jwtPayload = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expire_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expire_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const authService = { signIn };
