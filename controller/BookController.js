import *as BookModels from "../models/BookModels.js"


export const fetchBooks = async (req, res) =>{
    try{
        const book = await BookModels.getBooks();
        res.status(200).json({success: true, messsage: book});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            messsage: "Internal Server Error"
        })
    }
}