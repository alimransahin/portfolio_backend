import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProjectIntoDB = async (payload: TProject) => {
  const newProject = await Project.create(payload);
  return newProject;
};
const getAllProjectFromDB = async () => {
  const result = await Project.find();
  return result;
};
// const getSingleCarFromDB = async (id: string) => {
//   const result = await Car.findOne({ _id: id });
//   return result;
// };
const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteProjectFromDB = async (id: string) => {
  const deleteInfo = {
    isDeleted: true,
  };
  const result = await Project.findOneAndUpdate({ _id: id }, deleteInfo, {
    new: true,
  });
  return result;
};

export const projectService = {
  createProjectIntoDB,
  getAllProjectFromDB,
  // getSingleCarFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
};
