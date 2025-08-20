CREATE TABLE `organisation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `resp_person` varchar(255) NOT NULL,
  `seal` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `issuer` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `vehicle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `avg_consumption` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `travel_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `task` mediumtext DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `per_diem` float DEFAULT NULL,
  `report` mediumtext DEFAULT NULL,
  `state` varchar(255) NOT NULL,
  `adv_payment` float DEFAULT NULL,
  `fk_vehicle` int(11) DEFAULT NULL,
  `fk_organisation` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vehicle` (`fk_vehicle`),
  KEY `fk_organisation` (`fk_organisation`),
  CONSTRAINT `travel_order_ibfk_1` FOREIGN KEY (`fk_vehicle`) REFERENCES `vehicle` (`id`),
  CONSTRAINT `travel_order_ibfk_2` FOREIGN KEY (`fk_organisation`) REFERENCES `organisation` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `card_id_num` varchar(255) NOT NULL,
  `ssn` varchar(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `order_employee` (
  `fk_order` int(11) DEFAULT NULL,
  `fk_employee` int(11) DEFAULT NULL,
  KEY `fk_order` (`fk_order`),
  KEY `fk_employee` (`fk_employee`),
  CONSTRAINT `order_employee_ibfk_1` FOREIGN KEY (`fk_order`) REFERENCES `travel_order` (`id`),
  CONSTRAINT `order_employee_ibfk_2` FOREIGN KEY (`fk_employee`) REFERENCES `employee` (`id`),
  CONSTRAINT `order_employee_uk` UNIQUE (`fk_order`, `fk_employee`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `travel_expence` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expence_type` varchar(255) NOT NULL,
  `start_location` varchar(255) NOT NULL,
  `end_location` varchar(255) NOT NULL,
  `distance` float NOT NULL,
  `receipt` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `fk_travel_order` int(11),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_travel_order_fk` FOREIGN KEY (`fk_travel_order`) REFERENCES `travel_order`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` boolean NOT NULL,
  `fk_organisation` int,
  FOREIGN KEY (`fk_organisation`) REFERENCES `organisation`(`id`)
);

-- Sample data
INSERT INTO `organisation` (resp_person, seal, name, address, issuer)
VALUES ('Aleksa Milosevic', 'Seal - Beograd - ESCO', 'ESCO Control Project', 'Zdravka Celara 80, Zemun', 'Vladimir Bazovic');

INSERT INTO `user` (username, password, admin, fk_organisation)
VALUES ('admin', 'admin', 1, NULL);