import {Request, Response, NextFunction} from 'express';
import User from '../models/User';

export const viewUser = (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource');
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const newUser = await User.create(data);

  res.send({msg: 'Se pudo crear el usuario', newUser});
};
