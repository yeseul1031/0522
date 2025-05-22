const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  // 두 파일을 동시에 읽기
  const [user1Data, user2Data] = await Promise.all([
    getDataFromFilePromise(user1Path),
    getDataFromFilePromise(user2Path)
  ]);
  // 읽은 데이터를 파싱하여 배열로 반환
  return [JSON.parse(user1Data), JSON.parse(user2Data)];
};

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}