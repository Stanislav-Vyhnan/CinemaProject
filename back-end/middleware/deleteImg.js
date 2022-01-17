import fs from 'fs';

const deleteImg = (req, file, cb) => {
  const fileName = req.query[0];
  fs.unlink(`images/${fileName}`, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('File deleted');
    }
    cb(null);
  });
};

export default deleteImg;
