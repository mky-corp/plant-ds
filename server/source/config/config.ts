import { config } from 'dotenv';

config();

export default {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'superencryptedsecret',
  TOKEN_ISSUER: process.env.TOKEN_ISSUER || 'coolIssuer',
  EXPIRE_TIME: process.env.EXPIRE_TIME || 3600,
  DB_URL: process.env.DB_URL || 'none',
  PORT: process.env.PORT || '4000'
};
