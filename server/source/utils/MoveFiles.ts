import path from 'path';
import fs from 'fs';
import { UploadedFile } from 'express-fileupload';

const MoveFiles = (
  file: UploadedFile,
  storagePath: string,
  timeData: number
) => {
  const filePath = path.join(storagePath, timeData + '');

  return new Promise((resolve, reject) => {
    fs.promises
      .access(filePath)
      .then(() => reject(new Error(`File ${file.name} already exists`)))
      .catch(() =>
        file.mv(filePath, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(null);
          }
        })
      );
  });
};

export default MoveFiles;
