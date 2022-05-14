USE employee_db;

INSERT INTO department (name)
VALUES ("steel"),
       ("paint"),
       ("electrical"),
       ("managment"),
       ("sales");

INSERT INTO roles (title, salary, department_id)
VALUES ("welder", 70000, 1),
       ("painter" 45000, 2),
       ("supervisor", 85000, 4)


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Linda", "Belcher", 3, 12),
       ("bob", "belcher", 3, 21),
       ("jimmy", "pesto", 2, 34),
       ("lenny", "distephino", 1, 43),
       ("mort", "goldman", 3, 32);