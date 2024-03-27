import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in here");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send(
    "hello user, you are logged in here and you can delete your account"
  );
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in here and delete all accounts");
});

//Create
router.post("/", createUser);
//Update
router.put("/:id", updateUser);
//Delete
router.delete("/:id", deleteUser);
//Get
router.get("/:id", getUser);
//Get All
router.get("/", getAllUser);

export default router;
