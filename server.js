const res = require("express/lib/response");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const table = require("console.table");
const { listen } = require("express/lib/application");

const dbConnection = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "pswrd",
        database: 'employee_db'
    }
)

dbConnection.connect(function(err) {
    if (err) throw err;
    loadMainPrompts();
})

function loadMainPrompts() {
    inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "What do you want to do?",
      choices: [
        {
          name: "View employees",
          value: "VIEW_EMPLOYEES",
        },
        { name: "View  departments", value: "VIEW_DEPARTMENT" },
        {
          name: "view Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "add department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "add Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "update employee role",
          value: "UPDATE_ROLE",
        },
        {
          name: "exit",
          value: "EXIT",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    switch (choice) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "VIEW_DEPARTMENT":
        viewDepartment();
        break;
      case "VIEW_ROLES":
        viewRoles();
        break;
      case "ADD_DEPARTMENT":
        addDepartment();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "UPDATE_ROLE":
        updateRole();
        break;
      case "EXIT":
        exit();
        break;
    }
  });
}

function viewEmployees() {
  const sql = `SELECT * FROM employees`;
  dbConnection.query(sql, function (err, res) {
    if (err) throw err;
    console.log("view employees success!");
    console.table(res);
    loadMainPrompts();
  });
}

function viewDepartment() {
  const sql = `SELECT * FROM department`;
  dbConnection.query(sql, function (err, res) {
    if (err) throw err;
    console.log("view department success!");
    console.table(res);
    loadMainPrompts();
  });
}

function viewRoles() {
  const sql = `SELECT * FROM roles`;
  dbConnection.query(sql, function (err, res) {
    if (err) throw err;
    console.log("view roles success!");
    console.table(res);
    loadMainPrompts();
  });
}

function addDepartment() {
  inquirer
  .prompt([
    {
      name: "deptName",
      type: "input",
      message: "Add a New Department",
    },
  ]).then(function (res) {
    dbConnection.query(
      "INSERT INTO department SET ? ",
      {
        name: res.deptName,
      },
      function (err) {
        if (err) throw err;
        console.log("Add Department success!");
        console.table(res);
        loadMainPrompts();
      }
    );
  });
}

function addEmployee() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "firstNameInput",
      message: "Enter First Name",
    },
    {
      type: "input",
      name: "lastNameInput",
      message: "Enter Last Name",
    },
    {
      type: "input",
      name: "roleInput",
      message: "Enter Employee Role ID #",
    },
    {
      type: "input",
      name: "managerInput",
      message: "Enter Manager ID of 1 please",
    },
  ]).then(function (res) {
    dbConnection.query(
      "INSERT INTO employees SET ? ",
      {
        first_name: res.firstNameInput,
        last_name: res.lastNameInput,
        role_id: res.roleInput,
        manager_id: res.managerInput,
      },
      function (err) {
        if (err) throw err;
        console.log("Add Employee success!");
        console.table(res);
        loadMainPrompts();
      }
    );
  });
}

function updateRole() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "Please Enter Employees ID # you wish to change the role of.",
      name: "employID"
    },
    {
      type: "input",
      message: "Please Enter the New Role ID # you wish to change to (1-5)",
      name: "updatedRole"
    }
  ]).then(function (res) {
    const employIDval = res.employID;
    const updatedRoleVal = res.updatedRole;
    const updateQ = `UPDATE employees SET role_id = "${updatedRoleVal}" WHERE id = "${employIDval}"`;
    dbConnection.query(updateQ, function (err, res) {
      if (err) throw err;
      console.log("Update Employee Role success!");
      console.table(res);
      loadMainPrompts();
    });
  });
}

function exit() {
  process.exit();
}