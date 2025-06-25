ALTER TABLE travel_expence 
ADD COLUMN fk_travel_order int;

ALTER TABLE travel_expence 
ADD CONSTRAINT fk_travel_order_fk
FOREIGN KEY (fk_travel_order) REFERENCES travel_order(id);