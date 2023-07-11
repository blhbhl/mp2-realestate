use homyz_db;
create table login_register (id int primary key auto_increment, name varchar(20) not null, email varchar(30) not null, password varchar(100) not null);
show columns from login_register;
show tables;
select * from login_register;
delete from login_register;