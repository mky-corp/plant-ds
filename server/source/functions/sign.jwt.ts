import jwt from 'jsonwebtoken';
import config from '../config/config';
import { info, error } from '../config/logging';
import IUser from '../interface/user';

const NAMESPACE = 'Auth';

const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {
  const timeSinchEpoch = new Date().getTime();
  const expirationTime = timeSinchEpoch + Number(config.EXPIRE_TIME) * 100000;
  const expirationTimeInSeconds = Math.floor(expirationTime / 1000);

  info(NAMESPACE, `Attempting to sign token for ${user.names}`);

  try {
    jwt.sign(
      {
        names: user.names
      },
      config.TOKEN_SECRET,
      {
        issuer: config.TOKEN_ISSUER,
        algorithm: 'HS256',
        expiresIn: expirationTimeInSeconds
      },
      (error, token) => {
        if (error) {
          callback(error, null);
        } else if (token) {
          callback(null, token);
        }
      }
    );
  } catch (err) {
    error(NAMESPACE, err.message, err);
    callback(err, null);
  }
};

export default signJWT;