import { Request, Response, NextFunction } from 'express';
import HttpException from './HttpException';
import createError from 'http-errors';

export const handleNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(createError(404));
};

export const handleError = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
};

/**
 * Normalize a port into a number, string, or false.
 */

export const normalizePort = (val: string) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};
