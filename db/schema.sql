Create DATABASE burgers_db

USE burgers_db;

create TABLE burger (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(40) NOT NULL,    
    devoured boolean NOT NULL,
    createAt TIMESTAMP default CURRENT_TIMESTAMP NOT NULL 
);