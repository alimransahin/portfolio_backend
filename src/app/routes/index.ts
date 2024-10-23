import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
// import { CarRoutes } from "../modules/car/car.router";
// import { BookRouter } from "../modules/book/book.route";
// import { AuthRoutes } from "../modules/auth/auth.route";
// import { UserRoutes } from "../modules/user/user.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  // {
  //   path: "/user",
  //   route: "UserRoutes",
  // },
  // {
  //   path: "/cars",
  //   route: "CarRoutes",
  // },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
