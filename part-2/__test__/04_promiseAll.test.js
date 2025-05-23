const { readAllUsers } = require('../04_promiseAll');
const sinon = require('sinon');
sinon.spy(Promise, 'all');
beforeEach(function () {
  Promise.all.resetHistory();
});

describe('Promise.all Test', () => {
  describe('readAllUsers', () => {
    test('Promise 형태로 리턴되어야 합니다', () => {
      const result = readAllUsers();
      expect(result.constructor.name).toBe('Promise');
    });

    test('Promise.all을 사용해서 풀어야 합니다', (done) => {
      readAllUsers()
        .then((json) => {
          expect(Promise.all.called).toBe(true);
          done();
        })
        .catch(done);
    });

    test('user1.json의 내용과 user2.json 내용을 합쳐 객체로 리턴되어야 합니다', (done) => {
      readAllUsers()
        .then((json) => {
          const userArray = [
            {
              name: 'AliceKim',
              age: 26,
              sex: 'FeMale',
              company: {
                name: '로켓부스트',
              },
            },
            {
              name: 'BobLee',
              age: 40,
              sex: 'Male',
              company: {
                name: 'Anonymous',
              },
            },
          ];
          expect(json).toEqual(userArray);
          done();
        })
        .catch(done);
    });
  });
});
