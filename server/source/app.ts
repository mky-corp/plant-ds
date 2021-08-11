import express from 'express';
import app from './index';
import path from 'path';
import cors from 'cors';
import logger from 'morgan';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';

// utils
import {
  handleError,
  handleNotFound
} from './utils/ServerExceptions';

// routers
import indexRouter from './routes/index.routes';
import usersRouter from './routes/api/user.routes';
import imagesRouter from './routes/api/image.routes';
import authRouter from './routes/api/auth.routes';
import { extractJWT } from './middlewares/extract.jwt';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middlewares
app.use(
  cors({
    origin: app.get('FRONT'),
    credentials: true
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// cnn models
app.use('/cnn', express.static(path.join(__dirname, 'cnn_plants')));

// routes
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/images', extractJWT, imagesRouter);
app.use('/api/auth', authRouter);

// catch 404 and forward to error handler
app.use(handleNotFound);

// error handler
app.use(handleError);

// listenner server
app.listen(app.get('PORT'), () => {
  console.log(`Listen on http://localhost:${app.get('PORT')}`);
});
