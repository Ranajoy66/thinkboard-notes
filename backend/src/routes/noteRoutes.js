import express from "express"
import { createNotes, deleteNotes, getAllNotes, updateNotes, getNotesById } from "../controller/notesController.js";
import protect from "../middleware/authMiddleware.js";

const router=express.Router();

router.get("/",protect, getAllNotes)

router.get("/:id",protect, getNotesById)

router.post("/",protect, createNotes)

router.put("/:id",protect, updateNotes)

router.delete("/:id",protect, deleteNotes)

export default router