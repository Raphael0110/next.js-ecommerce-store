CREATE TABLE springseeds (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar (30) NOT NULL,
  growtime integer ,
  pries integer
);

INSERT INTO springseeds
(name, type ,growtime ,pries)
VALUES
('Cauliflower', 'veggi', 12, 80),
('Potato','veggi',6,50),
('Green Beans','veggi',10,60),
('Kale','veggi', 6,70 ),
('Parsnips','veggi',4,20),
('Garlic','veggi',4,40),
('Strawberries','frui',8,100),
('Wild Horseradish','veggi',7,35),
('Leek','veggi',7,35 )

SELECT * FROM springseeds;
