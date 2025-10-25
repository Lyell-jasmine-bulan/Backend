import express from "express";

//create express app
const app = express();

//middleware
app.use(express.json())

const port = 3000;

try{
    app.listen(port, ()=>{
        console.log('Listening to port 3000...');
    });
}catch(e){
    console.log(e);
}

app.get('Lyll', async (request, response) =>{
    response.status(200).json({message: "Hello Im Lyll!"});
});