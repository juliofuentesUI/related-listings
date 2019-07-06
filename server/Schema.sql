DROP DATABASE related_listings;
CREATE DATABASE related_listings;

USE related_listings;

CREATE TABLE user_info(
  user_info_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL
);

CREATE TABLE reviews(
  reviews_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username text NOT NULL,
  review_date text NOT NULL,
  user_comment text NOT NULL
  -- user_info_id int FOREIGN KEY REFERENCES user_info(user_info_id)
);

CREATE TABLE listings(
  listings_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomname text NOT NULL,
  room_location text NOT NULL,
  room_img text NOT NULL,
  price int NOT NULL,
  stars int NOT NULL,
  reviews_num int NOT NULL,
  liked boolean NOT NULL,
  room__host_name text NOT NULL,
  about_room text NOT NULL,
  about_space text NOT NULL,
  about_neighborhood text NOT NULL
  -- reviews_id int FOREIGN KEY REFERENCES reviews(reviews_id)
);


-- use mysql -uroot < ./database/Schema.sql
-- this initiates the database/tables
-- also deletes the old database being used
-- start from scratch