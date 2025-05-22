const fs = require("fs");

const getDataFromFile = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // 에러 발생 시: callback(에러, null)
      callback(err, null);
    } else {
      // 정상 동작 시: callback(null, data)
      callback(null, data);
    }
  });
};

getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile
};
