const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // 두 파일을 동시에 읽고 결과를 병합
  return Promise.all([
    getDataFromFilePromise(user1Path),
    getDataFromFilePromise(user2Path)
  ]).then(([user1Data, user2Data]) => {
    return [
      JSON.parse(user1Data), 
      JSON.parse(user2Data) 
    ];
  });
};

// readAllUsers()

module.exports = {
  readAllUsers
}