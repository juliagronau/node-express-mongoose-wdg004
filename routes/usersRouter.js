import { Router } from "express";
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.route("/").get(getAllUsers).post(createNewUser);

usersRouter
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser);

export default usersRouter;
