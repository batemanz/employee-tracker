USE employee_db;

INSERT INTO department (name)
VALUES ("steel"),
       ("paint"),
       ("electrical"),
       ("managment"),
       ("sales");

INSERT INTO roles (title, salary, department_id)
VALUES ("welder", 70000, 1),
       ("painter", 45000, 2),
       ("supervisor", 85000, 4),
       ("electrician", 80000, 3),
       ("sales rep", 40000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Linda", "Belcher", 3, NULL),
       ("bob", "belcher", 5, 1),
       ("jimmy", "pesto", 2, 1),
       ("lenny", "distephino", 1, 1),
       ("mort", "goldman", 4, 1);