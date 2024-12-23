import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { ProjectRoutes } from "../modules/projects/project.router";
import { BlogRoutes } from "../modules/blogs/blog.router";
import { ExperienceRoutes } from "../modules/experience/experience.router";
import { SkillRoutes } from "../modules/skills/skills.router";

const router = Router();
const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
  {
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/skill",
    route: SkillRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
