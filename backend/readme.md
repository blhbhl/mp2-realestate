# SQL Stuff

## DB
```sql
CREATE DATABASE `homyz_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
```
## Seller Page Table
```sql
-- homyz_db.seller_page definition

CREATE TABLE `seller_page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone_number` varchar(25) NOT NULL,
  `property_name` varchar(50) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `property_type` enum('House','Apartment','Condo') DEFAULT NULL,
  `property_area` int(11) NOT NULL,
  `property_age` int(11) NOT NULL,
  `bedroom` int(20) NOT NULL,
  `bathroom` int(20) NOT NULL,
  `additional_properties` text NOT NULL,
  `price` int(11) NOT NULL,
  `image_filename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

```

## Login Register Table
```sql
-- homyz_db.login_register definition

CREATE TABLE `login_register` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```