const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersChaining = () => {
  return getDataFromFilePromise(user1Path)
    .then(user1Data => {
      const user1 = JSON.parse(user1Data); // 첫 번째 유저 파싱
      return getDataFromFilePromise(user2Path) // 두 번째 파일 읽기
        .then(user2Data => {
          const user2 = JSON.parse(user2Data); // 두 번째 유저 파싱
          return [user1, user2]; // 두 유저를 배열로 반환
        });
    });
};

readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}