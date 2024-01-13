class Employee {
  constructor(name, salary, title, manager = null) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    if (manager) {
      manager.addEmployee(this);
    }
    this.manager = manager;
  }
}

module.exports = Employee;
