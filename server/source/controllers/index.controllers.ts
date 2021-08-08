import { Request, Response, NextFunction } from 'express';

export const viewIndex = (req: Request, res: Response, next: NextFunction) => {
  res.render('index', { title: 'Express' });
};
