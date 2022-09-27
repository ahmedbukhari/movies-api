import express from 'express';

import { createMovie, getMovies, getMovie, deleteMovie, updateMovie } from '../controllers/movies.js';

const router = express.Router();

router.get('/', getMovies);

router.post('/', createMovie);

router.get('/:username/:password', getMovie);

router.delete('/:username/:password', deleteMovie);
 
router.patch('/:username/:password', updateMovie);

export default router;