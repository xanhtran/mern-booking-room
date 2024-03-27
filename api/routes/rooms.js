import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.js";

const router = express.Router();

//Create
router.post("/", createRoom);
//Update
router.put("/:id", updateRoom);
//Delete
router.delete("/:id", deleteRoom);
//Get
router.get("/:id", getRoom);
//Get All
router.get("/", getAllRooms);

export default router;
