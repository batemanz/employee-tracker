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


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Linda", "Belcher", 3),
       ("bob", "belcher", 3),
       ("jimmy", "pesto", 2),
       ("lenny", "distephino", 1),
       ("mort", "goldman", 3);