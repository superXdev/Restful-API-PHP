-- buat database baru
create database restful_api;

-- gunakan
use restful_api;

-- buat tabel baru
CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(100),
  `email` varchar(100),
  `mobile` varchar(15),
  PRIMARY KEY  (`id`)
);