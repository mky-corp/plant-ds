import express from 'express';
import app from './index';
import path from 'path';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

// utils
import {
  handleError,
  handleNotFound,
  normalizePort
} from './utils/ServerExceptions';

// routes views
import indexRouter from './routes/index.routes';

// routes api
import usersRouter from './routes/api/user.routes';
import imagesRouter from './routes/api/image.routes';
import authRouter from './routes/api/auth.routes';

app.set('PORT', normalizePort(process.env.PORT || '5200'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middlewares
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// models
app.use('/cnn', express.static(path.join(__dirname, 'cnn_plants')));

// routes views
app.use('/', indexRouter);

// routes api
app.use('/api/users', usersRouter);
app.use('/api/images', imagesRouter);
app.use('/api/auth', authRouter);

// catch 404 and forward to error handler
app.use(handleNotFound);

// error handler
app.use(handleError);

app.listen(app.get('PORT'), () => {
  console.log(`Listen on http://localhost:${app.get('PORT')}`);
});
