const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  
  const [user1Data, user2Data] = await Promise.all([
    getDataFromFilePromise(user1Path),
    getDataFromFilePromise(user2Path)
  ]);
 
  return [JSON.parse(user1Data), JSON.parse(user2Data)];
};

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}