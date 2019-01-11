DROP DATABASE IF EXISTS petfinder_db;
CREATE DATABASE petfinder_db;

use petfinder_db;

create table pets (
    id int auto_increment primary key not null,
    pet_type varchar(50) not null,
    pet_age varchar(50) not null,
    pet_location varchar(50) not null
);