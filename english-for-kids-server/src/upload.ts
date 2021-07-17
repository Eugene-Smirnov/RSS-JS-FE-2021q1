import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { resolve } from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: resolve(__dirname, '../public/dynamic'),
    filename(_req, file, cb) {
      const fileName = encodeURIComponent(file.originalname);
      const name = `${uuidv4()}_${fileName}`;
      cb(null, name);
    },
  }),
});

export const uploadCategory = upload.single('image');
export const uploadCard = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'audio', maxCount: 1 },
]);
