const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersChaining = () => {
  return getDataFromFilePromise(user1Path)
    .then(user1Data => {
      const user1 = JSON.parse(user1Data); 
      return getDataFromFilePromise(user2Path) 
        .then(user2Data => {
          const user2 = JSON.parse(user2Data); 
          return [user1, user2]; 
        });
    });
};

readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}