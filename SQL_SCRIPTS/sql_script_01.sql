/* Lines Table */

DROP TABLE IF EXISTS LinesTable;

CREATE TABLE LinesTable (
    fId INT NOT NULL,
    objectId INT NOT NULL,
    lineName varchar(127) NOT NULL,
    easting INT(6) NOT NULL,
    northing INT(6) NOT NULL,
    `lines` varchar(255) NOT NULL,
    network varchar(127) NOT NULL,
    lineZone INT NOT NULL,
    x FLOAT(10, 8) NOT NULL,
    y FLOAT(10, 8) NOT NULL,
    PRIMARY KEY (fId)
);

/* https://dev.mysql.com/doc/refman/8.0/en/keywords.html#keywords-new-8-0-Z */

INSERT INTO Lines (FirstName, LastName, Username, Password) VALUES ("Tim", "Lehane", "timlehane");

SELECT * FROM Lines;

/* Stations Table */

