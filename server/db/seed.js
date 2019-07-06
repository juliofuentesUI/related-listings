const db = require('./index');
const faker = require('faker');

for(let i = 0; i <= 100; i++){
  let testQuery = `INSERT INTO listings (roomname, room_location, room_img, \
                  price, stars, reviews_num, liked, room__host_name, \
                  about_room, about_space, about_neighborhood) VALUES \
                  ('${faker.name.title()}', '${faker.address.city()}', 'three', \
                  4, 5, 6, 1, '${faker.name.firstName()}', 'nine', \
                  'ten', 'eleven')`;

    let testQuery2 = `INSERT INTO reviews (username, review_date, user_comment) \
                    VALUES ('${faker.name.firstName()} ${faker.name.lastName()}', \
                    '2019-09-09', '${faker.lorem.sentence()}')`;

    let testQuery3 = `INSERT INTO user_info (first_name, last_name) VALUES \
                  ('${faker.name.firstName()}', '${faker.name.lastName()}')`;

  db.query(testQuery, (error, results, fields) => {
    if(error){
      console.log(error);
      return;
    }
  });

  db.query(testQuery2, (error, results, fields) => {
    if(error){
      console.log(error);
      return;
    }
  });

  db.query(testQuery3, (error, results, fields) => {
    if(error){
      console.log(error);
      return;
    }
  });
}
