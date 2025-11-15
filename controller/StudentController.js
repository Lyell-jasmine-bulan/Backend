import * as StudentModels from "../models/StudentModels.js"


export const fetchStudents = async (req, res) =>{
    try{
        const student = await StudentModels.getStudents();
        res.status(200).json({success: true, messsage: student});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            messsage: "Internal Server Error"
        })
    }
}


export const createStudent = async (req, res) => {
    const { Name, Srcode, Course} = req.body;

    try {
        const studentId = await StudentModels.insertStudent(Name, Srcode, Course);
        res.status(200).json({ success: true, message: studentId });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const editStudent = async (req, res) => {
    const { Name, Srcode, Course } = req.body;
    const { studentId } = req.params;

    try {
        const updatedId = await StudentModels.updateStudent(Name, Srcode, Course, studentId);
        res.status(200).json({ success: true, message: updatedId });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


export const deleteStudent = async (req, res) => {
    const { bookId } = req.params;

    try {
        const deletedId = await StudentModels.deleteStudent(studentId);
        res.status(200).json({ success: true, message: deletedId });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
