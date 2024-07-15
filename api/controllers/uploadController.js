const downloader = require("image-downloader");
const fs = require("fs");

exports.uploadByLink = async (req, res) => {
  const { link } = req.body;
  const name = Date.now();
  await downloader.image({
    url: link,
    dest: `${__dirname}/../uploads/${name}.jpg`,
  });
  res.json(`uploads\\${name}.jpg`);
};

exports.uploadFromDevice = async (req, res) => {
  const uploadedFiles = [];
  let ogName = "";
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname, filename } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    ogName = newPath;
    uploadedFiles.push(filename + "." + ext);
  }
  res.json(ogName);
};
