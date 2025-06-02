//todo example basic class
class Department {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    displayName() : void{
        console.log(this.name, "Department");
    }
}

const accounting = new Department("Accounting");
accounting.displayName();

//todo example obj copy

const  accountingCopy = {
    name: "Accounting copy",
    displayName: accounting.displayName
}
accountingCopy.displayName()

// const accountingCopy1 = Object.assign({}, accounting, { name: "Accounting copy 1"}) //fixme
// console.log(accountingCopy1.accounting)

//todo example private, public access modifiers

class DepartmentWithAccess {
    public name: string;
    private employees: string[]; //accessible only within this class
    // constructor(public name: string, private employees: string[]) //fix shorthand
    constructor(name: string){
        this.name = name;
        this.employees = [];
    }
    displayName() : void {
        console.log(this.name, "Department");
    }
    addEmployee(employees: string): void {
        this.employees.push(employees);
    }
    displayEmmployees(): void {
        this.employees.forEach(employee => console.log(employee));
    }
}

const accountingWithAccess = new DepartmentWithAccess("Accounting with access");
accountingWithAccess.addEmployee("John Doe");
accountingWithAccess.displayEmmployees();
// accountingWithAccess.employees = ["Guru"] //fixme invalid access

//todo example readonly access modifier

class DepartmentWithReadonly {
    constructor(public name: string, private employees: string[], private readonly id : number) {
        //todo this.id is only once initialized and cannot be changed
    }

    displayName(): void {
        console.log(this.name, "Department", this.id);
    }

    addEmployee(employee: string): void {
        this.employees.push(employee);
    }

    displayEmployees(): void {
        this.employees.forEach(employee => console.log(employee));
    }
}

const accountingWithReadonly = new DepartmentWithReadonly("Accounting with readonly", [], 2);
accountingWithReadonly.displayName();

// todo example inheritance, override, protected access modifier
class Department1 {
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
    displayName() : void{
        console.log(this.name, "Department");
    }
}

class AccountingDepartment extends Department1 {
    reports: string[];
    constructor(name: string){
        super(name);
        this.reports = [];
    }
    addReport(report: string){
        this.reports.push(report);
    }
    printReports(){
        this.reports.forEach(report => console.log(report));
    }
    displayName(): void{
        if(this.name === "Accounting Department"){
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
accDept.printReports()

// todo example getter, setter method and static method
class User{
    private name: string= "";
    private age: number = 0;
    get user(): object {
        if(this.name === "" || this.age === 0) throw new Error("User name or age is not set");
        return {name : this.name, age: this.age};
    }
    set userName(name: string){
        this.name = name;
    }
    set userAge(age: number){
        this.age = age;
    }
    static get userCount(): number {
        return 100;
    }
}

const userObj = new User();
userObj.userName = "JOHN DOE";
userObj.userAge = 20;
console.log(userObj.user)

// static method
const userCount = User.userCount; //with creating obj we can access static method


//todo example abstract classes
abstract class abstractDepartment {
    name: string;
    protected employees: string[] = [];
    protected readonly id: number;
    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
    abstract displayName(): void;
}

class Subclass extends abstractDepartment{
    constructor(id: number, name: string, private report: string[]){
        super(name,id);
    }
    displayName(): void {
        console.log(this.name, "Department", this.id);
    }
}

const subclassobj = new Subclass(1, "Subclass", ["report1"]);
subclassobj.displayName();
