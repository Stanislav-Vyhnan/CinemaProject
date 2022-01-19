import fs from 'fs';

const deleteImg = (req, file, cb) => {
  const { nameImg } = req.body;
  fs.unlink(`images/${nameImg}`, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('File deleted');
    }
    cb(null);
  });
};

export default deleteImg;
