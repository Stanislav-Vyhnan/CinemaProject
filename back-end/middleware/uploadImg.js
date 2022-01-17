import multer from 'multer';
import moment from 'moment';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: async (req, file, cb) => {
    const folder = 'images/';
    fs.readdir(folder, (err, files) => {
      const format = file.originalname.split('.')[1];
      const date = moment().format('DDMMYYYY-HH');
      const name = `${date}--${file.originalname.slice(0, 5)}.${format}`;
      cb(null, name);
    });
  },
});

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export default multer({ storage, fileFilter });
