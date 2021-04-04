DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(40) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);