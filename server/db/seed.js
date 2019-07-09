const db = require('./index');
const faker = require('faker');

let roomNames = ['ENTIRE HOUSE - Shinjuku', 'ENTIRE HOUSE - Hokone', 'ENTIRE VILLA - Atami-shi', 'ENTIRE HOUSE - Fujiyoshida-shi', 'ENTIRE VILLA - Minamitsuru-Gun', 'ENTIRE CONOMINDIUM - Hokone-Machi', 'ENTIRE APARTMENT - Yamanakako'];
let roomLocations = ['SORA VILLA FUJI', `Y''s Village Fukuori`, 'Traditional Japanese House In Nature', 'E-Joy House', 'Close to train station!', 'Quiet and near Shinjuku station'];
let roomImgs = [`${faker.image.city()}`, `${faker.image.nature()}`, `${faker.image.people()}`, `${faker.image.people()}`, `${faker.image.avatar()}`, `${faker.image.cats()}`];
let lastNames = ['Cryus', 'Benzei', 'Gombei', 'Tonjuro', 'Ochaco', 'Bberry', 'Aaron', 'Gether', 'Floss'];
let firstNames = ['Ochaco', 'Ningen', 'Luna', 'Lidica', 'Yuna', 'Straze', 'Bellona', 'Li', 'Lisa'];
let reviewNum = () => {
  return Math.floor(Math.random() * 360) + 100;
}
let starNum = () => {
  return Math.floor(Math.random() * 5) + 1;
}
let price = () => {
  return Math.floor(Math.random() * 120) + 20;
}

let randomThing = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

for(let i = 0; i <= 100; i++){
  let testQuery = `INSERT INTO listings (roomname, room_location, room_img, price, stars, reviews_num, liked, room__host_name, about_room, about_space, about_neighborhood) VALUES ('${randomThing(roomNames)}', '${randomThing(roomLocations)}', '${randomThing(roomImgs)}', ${price()}, ${starNum()}, ${reviewNum()}, 1, '${randomThing(firstNames)}', '${faker.lorem.sentence()}', '${faker.lorem.sentence()}', '${faker.lorem.sentence()}')`;

    let testQuery2 = `INSERT INTO reviews (username, review_date, user_comment) VALUES ('${faker.name.firstName()} ${randomThing(lastNames)}', '2019-09-09', '${faker.lorem.sentence()}')`;

    let testQuery3 = `INSERT INTO user_info (first_name, last_name) VALUES ('${faker.name.firstName()}', '${randomThing(lastNames)}')`;

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
