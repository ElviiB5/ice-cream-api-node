CREATE DATABASE IF NOT EXISTS icecream;

USE icecream;

DROP TABLE IF EXISTS icecreams;

CREATE TABLE icecreams (
    id int NOT NULL AUTO_INCREMENT,
    flavor VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO icecreams (flavor) VALUES ('chocolate');