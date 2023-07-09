import {Request, Response} from 'express';
import User, {IUser} from '../models/User';
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) => {

    // User Save
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    const saveduser = await user.save();
     // Token
     const token: string = jwt.sign({_id: saveduser._id}, process.env.TOKEN_SECRET || 'token_secret');
    res.header('auth-token', token).json(saveduser);
};

export const signin = (req: Request, res: Response) => {
    res.send('signin');
};

export const profile = (req: Request, res: Response) => {
    res.send('profile');
}