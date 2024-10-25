import { TExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const createExperienceIntoDB = async (payload: TExperience) => {
  const newExperience = await Experience.create(payload);
  return newExperience;
};
const getAllExperienceFromDB = async () => {
  const result = await Experience.find();
  return result;
};
const updateExperienceIntoDB = async (
  id: string,
  payload: Partial<TExperience>
) => {
  const result = await Experience.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteExperienceFromDB = async (id: string) => {
  const deleteInfo = {
    isDeleted: true,
  };
  const result = await Experience.findOneAndUpdate({ _id: id }, deleteInfo, {
    new: true,
  });
  return result;
};

export const ExperienceService = {
  createExperienceIntoDB,
  getAllExperienceFromDB,
  updateExperienceIntoDB,
  deleteExperienceFromDB,
};
