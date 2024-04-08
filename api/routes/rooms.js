import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/:hotelId", verifyAdmin, createRoom);
//Update
router.put("/:id", verifyAdmin, updateRoom);
//Delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//Get
router.get("/:id/:hotelId", getRoom);
//Get All
router.get("/", getAllRooms);

export default router;
