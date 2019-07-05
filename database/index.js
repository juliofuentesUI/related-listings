const mysql = require('mysql');
// const faker = require('faker');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'related_listings'
});

connection.connect((err) => {
  if(err){
    console.log(err);
    return;
  } else {
    console.log("connection secured");
  }
});

module.exports = connection;


/* 

  1. Create a few functions to inhabit database
  2. these functions should include
    - listings
      - id
      - roomname
      - location
      - room_img
      - price
      - stars
      - liked
      - host_name
      - room_id
      - reviews_id (FOREIGN KEY)
      - reviews_num
      - about_listing
      - about_space
      - neighborhood
    - reviews
      - reviews_id
      - username
      - date
      - comment
      - user_id (FOREIGN KEY)
    - user_info
      - user_id 
      - first_name
      _ last_name
    3. 

*/

