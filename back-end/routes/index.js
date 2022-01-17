import express from 'express';

import {
  getPosters,
  createPoster,
  getPosterById,
  updatePoster,
  deletePoster,
} from '../controllers/Poster.js';

import uploadImg from '../middleware/uploadImg.js';
import optimizationImg from '../middleware/optimizationImg.js';
import deleteImg from '../middleware/deleteImg.js';

const router = express.Router();

router.get('/', getPosters);
router.get('/:id', getPosterById);
router.post('/', uploadImg.single('poster'), optimizationImg, createPoster);
router.patch('/:id', updatePoster);
router.delete('/:id', deleteImg, deletePoster);

export default router;
