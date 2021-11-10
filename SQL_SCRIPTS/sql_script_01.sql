/* Lines Table */

DROP TABLE IF EXISTS Lines;

CREATE TABLE Lines (
    fId int NOT NULL AUTO_INCREMENT,
    objectId int NOT NULL,
    lineName varchar(127) NOT NULL,
    easting int(6) NOT NULL,
    northing int(6) NOT NULL,
    lines varchar(255) NOT NULL,
    network varchar(127) NOT NULL,
    lineZone INT NOT NULL,
    x FLOAT(10, 8) NOT NULL,
    y FLOAT(10, 8) NOT NULL,
    PRIMARY KEY (Id)
);

/* https://dev.mysql.com/doc/refman/8.0/en/keywords.html#keywords-new-8-0-Z */

INSERT INTO Users (FirstName, LastName, Username, Password) VALUES ("Tim", "Lehane", "timlehane");

SELECT * FROM Users;

/* Stations Table */

