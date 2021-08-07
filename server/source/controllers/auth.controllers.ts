import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import { error, info } from '../config/logging';
import signJWT from '../functions/sign.jwt';

const NAMESPACE = 'Auth';

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  info(NAMESPACE, 'Token validated, user authorized');

  return res.status(200).json({
    message: 'Authorized'
  });
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password: firstPass } = req.body;

  try {
    const user = await User.findOne({ email, state: true });

    if (user === null) {
      return res.status(404).json({
        message: 'Error Not Found user'
      });
    }

    const { password } = user;
    const validatePass = bcrypt.compareSync(firstPass, password);

    if (!validatePass) {
      return res.status(400).send({
        message: 'Invalid information'
      });
    }

    signJWT(user, (_error, token) => {
      if (_error) {
        error(NAMESPACE, 'Unable to sign token: ', _error);

        return res.status(401).json({
          message: 'Unauthorized',
          error: _error
        });
      } else if (token) {
        return res.status(200).json({
          message: 'Auth Successful',
          token,
          user
        });
      }
    });
  } catch (err: any) {
    error(NAMESPACE, err.message, err);

    return res.status(500).send({
      message: err.message,
      err
    });
  }
};
