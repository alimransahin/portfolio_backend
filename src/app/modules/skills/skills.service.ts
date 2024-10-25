import { TSkill } from "./skills.interface";
import { Skill } from "./skills.model";

const createSkillIntoDB = async (payload: TSkill) => {
  const newSkill = await Skill.create(payload);
  return newSkill;
};
const getAllSkillFromDB = async () => {
  const result = await Skill.find();
  return result;
};
// const getSingleCarFromDB = async (id: string) => {
//   const result = await Car.findOne({ _id: id });
//   return result;
// };
const updateSkillIntoDB = async (id: string, payload: Partial<TSkill>) => {
  const result = await Skill.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteSkillFromDB = async (id: string) => {
  const deleteInfo = {
    isDeleted: true,
  };
  const result = await Skill.findOneAndUpdate({ _id: id }, deleteInfo, {
    new: true,
  });
  return result;
};

export const skillService = {
  createSkillIntoDB,
  getAllSkillFromDB,
  updateSkillIntoDB,
  deleteSkillFromDB,
};
