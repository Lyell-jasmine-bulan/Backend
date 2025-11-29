/*import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/BookRoutes.js";
import cors from "cors"


//init app
const app = express();

let corsOptions = {
    origin: process.env.ORIGIN
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));

const port = 3000;

try{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch(e){
    console.log(e);
}

app.use('/book',bookRoutes);



app.use((req, res, next) => {
    console.log (req.path, req.method);
})*/






import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";
import cors from "cors"
import userRoutes from "./routers/UserRoutes.js";

//init app
const app = express();

let corsOptions = {
    origin: process.env.ORIGIN
}

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const port = 3000;

try{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch(e){
    console.log(e);
}

app.use('/student',studentRoutes);
app.use('/user',userRoutes);
app.use('/book',bookRoutes);

app.use((req, res,) => {
    console.log (req.path, req.method);
})
