import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import bcryptjs from 'bcryptjs';

export const viewUsers = (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource');
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await User.find({ state: true });

    res.status(200).json({
      allUsers
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      err
    });
  }
};

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const { password } = data;

  bcryptjs.hash(password, 10, async (hashError, hash) => {
    if (hashError) {
      return res.status(500).json({
        message: hashError.message,
        error: hashError
      });
    }

    try {
      const _user = await User.create({
        ...data,
        password: hash
      });

      res.status(201).json({ message: 'Se creo el usuario', _user });
    } catch (err) {
      res.status(500).json({ message: err.message, err });
    }
  });
};
