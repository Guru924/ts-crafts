"use strict";
//todo example basic class
class Department {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name, "Department");
    }
}
const accounting = new Department("Accounting");
accounting.displayName();
//todo example obj copy
const accountingCopy = {
    name: "Accounting copy",
    displayName: accounting.displayName
};
accountingCopy.displayName();
// const accountingCopy1 = Object.assign({}, accounting, { name: "Accounting copy 1"}) //fixme
// console.log(accountingCopy1.accounting)
//todo example private, public access modifiers
class DepartmentWithAccess {
    // constructor(public name: string, private employees: string[]) //fix shorthand
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    displayName() {
        console.log(this.name, "Department");
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    displayEmmployees() {
        this.employees.forEach(employee => console.log(employee));
    }
}
const accountingWithAccess = new DepartmentWithAccess("Accounting with access");
accountingWithAccess.addEmployee("John Doe");
accountingWithAccess.displayEmmployees();
// accountingWithAccess.employees = ["Guru"] //fixme invalid access
//todo example readonly access modifier
class DepartmentWithReadonly {
    constructor(name, employees, id) {
        this.name = name;
        this.employees = employees;
        this.id = id;
        //todo this.id is only once initialized and cannot be changed
    }
    displayName() {
        console.log(this.name, "Department", this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    displayEmployees() {
        this.employees.forEach(employee => console.log(employee));
    }
}
const accountingWithReadonly = new DepartmentWithReadonly("Accounting with readonly", [], 2);
accountingWithReadonly.displayName();
// todo example inheritance, override, protected access modifier
class Department1 {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name, "Department");
    }
}
class AccountingDepartment extends Department1 {
    constructor(name) {
        super(name);
        this.reports = [];
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReports() {
        this.reports.forEach(report => console.log(report));
    }
    displayName() {
        if (this.name === "Accounting Department") {
            console.log("This is the main accounting department");
        }
        else {
            console.log(this.name, "Department");
        }
    }
}
const accDept = new AccountingDepartment("Accounting Department");
accDept.displayName();
accDept.addReport("Monthly Report");
accDept.printReports();
// todo example getter, setter method and static method
class User {
    constructor() {
        this.name = "";
        this.age = 0;
    }
    get user() {
        if (this.name === "" || this.age === 0)
            throw new Error("User name or age is not set");
        return { name: this.name, age: this.age };
    }
    set userName(name) {
        this.name = name;
    }
    set userAge(age) {
        this.age = age;
    }
    static get userCount() {
        return 100;
    }
}
const userObj = new User();
userObj.userName = "JOHN DOE";
userObj.userAge = 20;
console.log(userObj.user);
// static method
const userCount = User.userCount; //with creating obj we can access static method
//todo example abstract classes
class abstractDepartment {
    constructor(name, id) {
        this.employees = [];
        this.name = name;
        this.id = id;
    }
}
class Subclass extends abstractDepartment {
    constructor(id, name, report) {
        super(name, id);
        this.report = report;
    }
    displayName() {
        console.log(this.name, "Department", this.id);
    }
}
const subclassobj = new Subclass(1, "Subclass", ["report1"]);
subclassobj.displayName();
