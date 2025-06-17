CREATE TABLE `organisation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `resp_person` varchar(255) NOT NULL,
  `seal` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `issuer` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci