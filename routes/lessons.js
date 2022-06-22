import express from 'express';
import {
  selectAllLessons,
  selectLessonsById,
  postLessons,
  selectLessonsByTopic,
} from '../models/lessons.js';
const router = express.Router();

// http://localhost:3000/lessons/q?topic=html
router.get('/q', async (req, res) => {
  //How to have two .get/ without conflict?
  const topic = req.query.topic;
  console.log('this is topic ', topic);
  const results = await selectLessonsByTopic(topic);
  res.json({ success: true, payload: results });
});

router.get('/', async (req, res) => {
  const results = await selectAllLessons();
  res.json({ success: true, payload: results });
});

router.get('/:id', async (req, res) => {
  const results = await selectLessonsById(req.params.id);
  res.json({ success: true, payload: results });
});

router.post('/', async (req, res) => {
  const data = req.body;
  console.log(data);
  const results = await postLessons(
    data.name,
    data.topic,
    data.description,
    data.zoom,
    data.paypalemail,
    data.datetime,
    data.duration,
    data.starrating
  );
  res.json({ success: true, payload: results });
});

export default router;
