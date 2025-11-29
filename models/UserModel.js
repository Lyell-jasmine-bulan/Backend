import pool from "../config/db.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const createUser = async (name, email, password) =>{
    if(name.trim() === '' || 
        email.trim() === '' ||
        password.trim() === ''){
        const error = new TypeError(
            'Name, Email and Password are required.'
        )
        error.statusCode = 400;
        throw error;
    }

    if(!validator.isEmail(email)){
        const error = new TypeError('Invalid email address.')
        error.statusCode = 400;
        throw error;
    }

    if(!validator.isStrongPassword(password)){
        const error = new TypeError('Password is not strong enough.')
        error.statusCode = 400;
        throw error;
    }

    const [tbluser] = await pool.query(
        "Select email FROM tbluser WHERE email = ?", [email]
    );

    if(tbluser.length === 1){
        const error = new Error(`The email ${email} is already used.`);
        error.statusCode = 400;
        throw error; 
    }

    const salt = bcrypt.genSaltSync(10);
    const hasheadPassword = bcrypt.hashSync(password, salt);

    const [newtbluser] = await pool.query(
        "INSERT INTO tbluser (name, email, password) VALUES(?,?,?)",
        [name, email, hasheadPassword]
    );

    return newtbluser;
} 



export const login = async (email, password) =>{
    if (email.trim() === '' || password.trim() === ''){
        const error = new Error('Email and Password is required.');
        error.statusCode = 400;  
        throw error;
    }

    const [tbluser]  = await pool.query(
        "SELECT * FROM tbluser WHERE email = ?", [email]
    );

    if(tbluser.length === 0){
        const error = new Error(
            `An account with the email: ${email} does not exist`
        );
        error.statusCode = 400;
        throw error;    
    }    

    // 🔥 FIX: define user before using it (no structure changed)
    const user = tbluser[0];

    // 🔥 FIX: correct password check
    if (!bcrypt.compareSync(password, user.password)){
        const error = new Error('Incorrect password.');
        error.statusCode = 400;
        throw error; 
    }

    // 🔥 FIX: use user.id, not user[0].id
    const token = jwt.sign(
        {id: user.id},
        process.env.SECRET,
        {expiresIn: '1d'}
    );

    return token;
};



export const getUser = async (id) =>{
    // 🔥 FIX: wrong NaN check — must use isNaN()
    if (isNaN(parseInt(id))) {
        throw new Error('Invalid id');
    }

    const [tbluser] = await pool.query(
        'SELECT * FROM tbluser WHERE id = ?', 
        [id]
    );

    return tbluser;
}
