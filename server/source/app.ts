import express from 'express';
import app from './index';
import path from 'path';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

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
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));

/**
 * Para poder obtener la red neuronal con todos sus archivos necesitamos tenerlo
 * disponible desde nuestro servidor para cargar todos los 28 archivos que nos
 * genero la transformación del "modelo.h5".
 *
 * Todo se subirá en la ruta URL/cnn para poder realizar nuestra petición con tfjs
 */
app.use('/cnn', express.static(path.join(__dirname, 'cnn_plants')));

// routes
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/images', imagesRouter);
app.use('/api/auth', authRouter);

// catch 404 and forward to error handler
app.use(handleNotFound);

// error handler
app.use(handleError);

// listener server
app.listen(app.get('PORT'), () => {
  console.log(`Listen on http://localhost:${app.get('PORT')}`);
});
