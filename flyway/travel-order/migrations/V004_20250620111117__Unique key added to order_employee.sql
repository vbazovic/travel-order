ALTER table order_employee 
ADD CONSTRAINT order_employee_uk UNIQUE (fk_order, fk_employee);