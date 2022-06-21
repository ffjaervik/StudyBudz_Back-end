import express from "express";
import { selectAllLessons, selectLessonsById } from "../models/lessons.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const results = await selectAllLessons();
  res.json({ success: true, payload: results });
});

router.get("/:id", async (req, res) => {
  const results = await selectLessonsById(req.params.id);
  res.json({ success: true, payload: results });
});

export default router;
