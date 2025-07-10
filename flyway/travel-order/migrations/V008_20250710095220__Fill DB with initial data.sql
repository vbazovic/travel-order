insert into organisation(resp_person, seal, name, address, issuer)
values ('Aleksa Milosevic', 'Seal - Beograd - ESCO', 'ESCO Control Project', 'Zdravka Celara 80, Zemun', 'Vladimir Bazovic');

insert into user(username, password, admin, fk_organisation)
values ('admin', 'admin', 1, null);