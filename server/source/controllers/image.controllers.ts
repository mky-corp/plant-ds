import { Request, Response, NextFunction, json } from 'express';
import { UploadedFile } from 'express-fileupload';
import Image from '../models/Image';
import fs from 'fs';

export const viewImage = (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource');
};

export const uploadOneImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let sampleFile: UploadedFile;
  let uploadPath: string;

  uploadPath = __dirname + '/images/';
  !fs.existsSync(uploadPath) && fs.mkdirSync(uploadPath);

  console.log(req.files);

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json('No existen archivos para subir.');
  }

  if (req.files.sampleFile == null) {
    return res.status(400).json('Enviar con el nombre correcto.');
  }

  sampleFile = req.files.sampleFile as UploadedFile;

  let approvedType: string[] = ['image/png', 'image/jpeg', 'image/jpg'];

  if (!approvedType.includes(sampleFile.mimetype)) {
    return res.status(400).json('No tiene el formato adecuado.');
  }

  let currentDate = new Date();
  let datetime = currentDate.getDate() + '-'
    + (currentDate.getMonth() + 1) + '-'
    + currentDate.getFullYear() + ' '
    + currentDate.getHours() + ':'
    + currentDate.getMinutes() + ':'
    + currentDate.getSeconds();

  uploadPath = __dirname + '/images/' + datetime + ' ' + sampleFile.name;

  sampleFile.mv(uploadPath, async (err: any) => {
    if (err)
      return res.status(500).json(err);

    console.log(sampleFile.name);
    console.log(sampleFile.mimetype);
    res.status(201).json({ image: uploadPath, message: 'File upload!' });
  });
};
