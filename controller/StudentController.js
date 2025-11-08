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