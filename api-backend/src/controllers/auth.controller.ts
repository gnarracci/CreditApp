import {Request, Response} from 'express';
import User from '../models/User';

export const signup = (req: Request, res: Response) => {
    console.log(req.body);
    res.send('signup');
};

export const signin = (req: Request, res: Response) => {
    res.send('signin');
};

export const profile = (req: Request, res: Response) => {
    res.send('profile');
}