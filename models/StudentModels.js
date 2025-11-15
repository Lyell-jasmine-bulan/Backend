import pool from '../config/db.js';

export const getStudents = async () =>{
    const[rows] = await pool.query("SELECT * FROM `tblstudents`");
    return rows;
}




export const insertStudent = async (Name, Srcode, Course) => {
    const [result] = await pool.query(
        "INSERT INTO tblstudents (Name, Srcode, Course) VALUES (?, ?, ?)",
        [Name, Srcode, Course]
        )
        return result.insertId
}

export const updateStudent = async (Name , Srcode, Course, studentId) => {
    const [result] = await pool.query(
        "UPDATE tblbook SET Name = ?, Srcode = ?, Course = ? WHERE Id = ?",
        [Name, Srcode, Course, studentId]
        )
        return result.affectedRows;
}

export const deleteStudent = async (studentId) => {
    const [result] = await pool.query(
        "DELETE FROM tblstudents WHERE Id = ?",
        [bookId]
        )
        return result.affectedRows;
}