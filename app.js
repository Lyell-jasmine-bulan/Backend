/*import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/BookRoutes.js"
import studentRoutes from "./routers/StudentRoutes.js"

//init app
const app = express();

//middleware
app.use(express.json());

const port = 3000;

try{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch(e){
    console.log(e);
}

app.use('/student',studentRoutes);*/

import express from "express";
import 'dotenv/config.js';
import studentRoutes from "./routers/StudentRoutes.js"

//init app
const app = express();

//middleware
app.use(express.json());

const port = 3000;

try{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch(e){
    console.log(e);
}

app.use('/student',studentRoutes);