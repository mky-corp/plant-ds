import express from 'express';
import { normalizePort } from './utils/ServerExceptions';
import config from './config/config';
import './db';

const app = express();

app.set('PORT', normalizePort(process.env.PORT || '5200'));
app.set('FRONT', config.FRONT_URL + '');

export default app;