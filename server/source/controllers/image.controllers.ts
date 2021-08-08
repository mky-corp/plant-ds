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

    console.log(req.files)

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No existen archivos para subir.');
    }

    if (req.files.sampleFile == null){
      return res.status(400).send('Enviar con el nombre correcto.');
    }

    sampleFile = req.files.sampleFile as UploadedFile;

    let approvedType : string[] = ['image/png', 'image/jpeg'];
    
    if (!approvedType.includes(sampleFile.mimetype)) {
      return res.status(400).send('No tiene el formato adecuado.');
    }
    
    let currentdate = new Date(); 
    let datetime =  currentdate.getDate() + "-"
                    + (currentdate.getMonth()+1)  + "-" 
                    + currentdate.getFullYear() + " "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    uploadPath = __dirname + '/images/' + datetime + " " + sampleFile.name;
  
    sampleFile.mv(uploadPath, async function(err: any) {
      if (err)
        return res.status(500).send(err);

      console.log(sampleFile.name);
      console.log(sampleFile.mimetype);
      console.log('True');
      res.send('Archivo subido!');
    });
};
