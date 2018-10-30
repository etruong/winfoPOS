--Sets up database for POS+

CREATE DATABASE IF NOT EXISTS POS;
USE POS;

DROP TABLE IF EXISTS Struggles;
DROP TABLE IF EXISTS Positive;

CREATE TABLE Struggles(
    entry_date DATE,
    struggle VARCHAR(255),
    PRIMARY KEY(entry_date)
);

CREATE TABLE Positive(
    entry_date DATE,
    one VARCHAR(255),
    two VARCHAR(255),
    three VARCHAR(255),
    PRIMARY KEY(entry_date)
);

CREATE TABLE Mood(
    entry_date DATE,
    mood VARCHAR(255),
    PRIMARY KEY(entry_date)
);

CREATE TABLE User(
    username VARCHAR(35),
    password VARCHAR(35),
    PRIMARY KEY(username)
);
