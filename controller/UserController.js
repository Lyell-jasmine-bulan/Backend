import * as UserModel from '../models/UserModel.js';


export const register = async (req, res) => {
    const {name, email, password}= req.body;

    try{
        const users = await UserModel.createUser(name, email, password);
        res.status(200).json({success: true, message: users});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: true,
            message: [{result : "A new account has been created!"}]
        });
    }
    
};

export const login = async (req, res) => {
    const { email: userEmail, password: userPassword } = req.body;

    try {
        const loginToken = await UserModel.login(userEmail, userPassword);

        return res.status(200).json({
            success: true,
            message: "Login successful!",
            token: loginToken
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Login failed",
            error: error.message
        });
    }
};
