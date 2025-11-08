import * as BookControllers from '../controller/StudentController.js'
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', BookControllers.fetchBooks);





export default bookRoutes