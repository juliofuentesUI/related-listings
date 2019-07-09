const db = require('./index');
const faker = require('faker');

// Perhaps hardcoded data will look better than the lorem ipsum. Actually, you know what. it most def will!!!

let roomNames = ['ENTIRE HOUSE - Shinjuku', 'ENTIRE HOUSE - Hokone', 'ENTIRE VILLA - Atami-shi', 'ENTIRE HOUSE - Fujiyoshida-shi', 'ENTIRE VILLA - Minamitsuru-Gun', 'ENTIRE CONOMINDIUM - Hokone-Machi', 'ENTIRE APARTMENT - Yamanakako'];
let roomLocations = ['SORA VILLA FUJI', `Y's Village Fukuori`, 'Traditional Japanese House In Nature', 'E-Joy House', 'Close to train station!', 'Itadaki Senpai'];
let roomImgs = [`${faker.image.city()}`, `${faker.image.city()}`, `${faker.image.city()}`, `${faker.image.city()}`, `${faker.image.city()}`, `${faker.image.city()}`];
let reviewNum = () => {
  return Math.floor(Math.random() * 360) + 100;
}
let starNum = () => {
  return Math.floor(Math.random() * 5) + 1;
}

let randomThing = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

for(let i = 0; i <= 100; i++){
  let testQuery = `INSERT INTO listings (roomname, room_location, room_img, price, stars, reviews_num, liked, room__host_name, about_room, about_space, about_neighborhood) VALUES ('${randomThing(roomNames)}', '${randomThing(roomLocations)}', '${randomThing(roomImgs)}', 44, ${starNum()}, ${reviewNum()}, 1, '${faker.name.firstName()}', '${faker.lorem.paragraph()}', '${faker.lorem.sentence()}', '${faker.lorem.text()}')`;

    let testQuery2 = `INSERT INTO reviews (username, review_date, user_comment) VALUES ('${faker.name.firstName()} ${faker.name.lastName()}', '2019-09-09', '${faker.lorem.sentence()}')`;

    let testQuery3 = `INSERT INTO user_info (first_name, last_name) VALUES ('${faker.name.firstName()}', '${faker.name.lastName()}')`;

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
