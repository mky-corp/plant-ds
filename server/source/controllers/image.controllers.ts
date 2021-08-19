import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import Image from '../models/Image';
import { info } from '../config/logging';
import MoveFiles from '../utils/moveFiles';

const NAMESPACE = 'Images';

export const viewImage = (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource');
};

export const uploadImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.files) {
    return res.status(400).json({
      success: false,
      message: 'No files were uploaded'
    });
  }

  const storages = __dirname + '../uploads/';
  !fs.existsSync(storages) && fs.mkdirSync(storages);

  let files = req.files.file;
  let imgList = ['.png', '.jpg', '.jpeg', '.gif'];

  if (!Array.isArray(files)) files = [files];

  try {
    for (const file of files) {
      const dateTime = Date.now();
      await MoveFiles(file, storages, dateTime);

      try {
        const _image = await Image.create({
          name: file.name,
          description: file.mimetype,
          estate: true
        });

        info(NAMESPACE, `Success image ${file.name}`);
      } catch (err: any) {
        res.status(500).json({ message: err.message, err });
      }
    }
  } catch (err: any) {
    if (err.code) return next(err);

    return res.status(400).json({
      success: false,
      message: err.message,
      path: storages
    });
  }

  res.status(201).json({
    success: true,
    message: 'Files successfully uploaded',
    path: storages
  });
};

export const getImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const oneImage = await Image.findOne({ _id: id });

    res.status(200).json(oneImage);
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
      err
    });
  }
};
