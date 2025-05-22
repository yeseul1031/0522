const fs = require('fs');
const { readAllUsersChaining } = require('../03_basicChaining');
const sandbox = require('sinon').createSandbox();

// delete comments
const MULTI_LINES_COMMENT = /\/\*[\s\S]*?\*\/(\r?\n|\r)/;
const ONE_LINE_COMMENT = /\/\/.*(\r?\n|\r)/;
const COMMENT = new RegExp(
  `${MULTI_LINES_COMMENT.source}|${ONE_LINE_COMMENT.source}`,
  'g'
);
const funcBody = readAllUsersChaining.toString().replace(COMMENT, '');

sandbox.spy(Promise, 'all');
sandbox.spy(fs, 'readFile');
sandbox.spy(fs, 'readFileSync');

describe('Basic chaining Test', () => {
  beforeEach(function () {
    sandbox.resetHistory();
  });

  describe('readAllUsersChaining', () => {
    test('체이닝의 결과가 Promise 형태로 리턴되어야 합니다', () => {
      const result = readAllUsersChaining();
      expect(result.constructor.name).toBe('Promise');
    });

    test('user1.json의 내용과 user2.json 내용을 합쳐 객체로 리턴되어야 합니다', (done) => {
      readAllUsersChaining()
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

    test('fs module을 직접 사용하지 말고, getDataFromFilePromise을 두 번 사용해야 합니다', (done) => {
      readAllUsersChaining().then(() => {
        let matched = funcBody.match(/getDataFromFilePromise\(.+?\)/g) || [];
        expect(matched.length).toBe(2);
        done();
      });
    });

    it('Promise.all 또는 async/await을 사용하지 않고 풀어보세요', (done) => {
      readAllUsersChaining()
        .then((json) => {
          expect(Promise.all.called).toBe(false);
          const matched = funcBody.match(/await/g) || [];
          expect(matched.length).toBe(0);
          done();
        })
        .catch(done);
    });
  });
});
