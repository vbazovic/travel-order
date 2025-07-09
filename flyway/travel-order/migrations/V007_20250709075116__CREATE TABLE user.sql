create table user(
	id int primary key auto_increment,
	username VARCHAR(255) not null,
	password varchar(255) not null,
	admin boolean not null,
	fk_organisation int,
	foreign key (fk_organisation) references organisation(id)
);