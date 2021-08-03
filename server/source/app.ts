import express, { NextFunction, Request, Response } from 'express';
import app from './index';
import path from 'path';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';

import HttpException from './utils/HttpException';
import normalizePort from './utils/ServerExceptions';

// routes views
import indexRouter from './routes/index.routes';

// routes api
import usersRouter from './routes/api/user.routes';
import authRouter from './routes/api/auth.routes';

app.set('PORT', normalizePort(process.env.PORT || '5200'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middlewares
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes views
app.use('/', indexRouter);

// routes api
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('PORT'), () => {
  console.log(`Listen on http://localhost:${app.get('PORT')}`);
});