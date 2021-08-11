import { Request, Response, NextFunction } from 'express';
import { info } from '../config/logging';
import config from '../config/config';
import jwt from 'jsonwebtoken';

const NAMESPACE = 'Auth';

export const extractJWT = (req: Request, res: Response, next: NextFunction) => {
  info(NAMESPACE, 'Token validated, user authorized');
  let token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, config.TOKEN_SECRET, (error, decoded) => {
      if (error) {
        return res.status(404).json({
          message: error.message,
          error
        });
      } else {
        res.locals.jwt = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }
};
