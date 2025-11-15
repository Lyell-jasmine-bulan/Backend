import * as StudentController from '../controller/StudentController.js'
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudents);
studentRoutes.post('/new', StudentController.createStudent);
studentRoutes.put('/edit/:bookId', StudentController.editStudent);
studentRoutes.delete('/delete/:bookId', StudentController.deleteStudent);





export default studentRoutes