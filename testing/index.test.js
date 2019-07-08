const supertest = require('supertest');
const db = require('../server/db/index');
const app = require('../server/index');

describe('get /rooms/testing', () => {
  beforeEach(async () => {
    await db.query("INSERT INTO user_info_testing (user_info_id, first_name, last_name) VALUES (0001, 'amar', 'vadhia') ON DUPLICATE KEY UPDATE user_info_id=0001", (error, results, fields) => {
      if(error){
        console.log(error);
      }
    });
  });

  test('it should get user names from table', async () => {
    const response = await supertest(app).get('/rooms/testing');
    expect(response.body[0].first_name).toBe('amar');
  });
});