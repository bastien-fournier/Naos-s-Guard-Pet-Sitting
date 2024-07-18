create table user (
  id int auto_increment primary key,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(150) NOT NULL
);

create table review (
   id int auto_increment primary key,
   rate int not null check (rate between 1 and 10),
   comment text
);

create table dog (
  id int auto_increment primary key,
  name VARCHAR(100) NOT NULL,
  picture TEXT,
  user_id INT ,
  FOREIGN KEY (user_id) REFERENCES user(id)
);
