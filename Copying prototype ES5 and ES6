Using ES6 on classes

var React = require("react");
var ReactDOM = require("react-dom");

/* Function Constructor */

var Employee = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var sam = new Employee("Sam", "Williams");

// console.log(sam);
// console.log(Employee.prototype === sam.__proto__);

Employee.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

//console.log(sam.getFullName());


//Creating a copy of the method

var Engineer = function(firstName, lastName, field) {
Employee.call(this, firstName, lastName);
this.field = field;
};

//Refrain of doing the below as this will change also the date in Employee when changes made in Engineer
// Engineer.prototype = Employee.prototype

//Instead use this, it will create copy of Employee.prototype
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

Engineer.prototype.getDescription = function () {
    return this.getFullName() + " is " + this.field + "Engineer";
};

var sam1 = new Engineer("Sam", "Williams", "Software");
//console.log(sam1);
//console.log(sam1.getFullName());
//console.log(sam1.getDescription());







/* ES6 Class */

class EmployeeES6 {
    constructor (firstName, lastName) {
//        console.log("Inside EmployeeES6");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName () {
        return this.firstName + " " + this.lastName;
    }
}

var sammy = new EmployeeES6 ("Sammy", "Winchester");
// console.log(sammy);
// console.log(sammy.getFullName());
// console.log(EmployeeES6.prototype === sammy.__proto__);


//to copy the prototype of EmployeeES6 to EngineerES6
class EngineerES6 extends EmployeeES6 {
//if no contructor has been defined, it will automatically create
// constructor(...args) {
//    super (...args);
//}
    constructor(firstName, lastName, field) {
        super(firstName, lastName);
        this.field = field;
    }

    //static is to put greeting only in class not in prototype
    //static can only be accessed via class
    static greeting () {
        return "sayHi";
    }

    getDescription() {
        return this.getFullName() + " is " + this.field + "Engineer";
    }
}

var sammy1 = new EngineerES6 ("Sammy", "Winchester", "Electronics");
console.log(EngineerES6.greeting());
console.log(sammy1.getDescription());
//console.log(sammy1.getFullName());
//console.log(sammy1.getDescription());



























var React = require("react");
var ReactDOM = require("react-dom");

/* Function Constructor */

var Employee = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var sam = new Employee("Sam", "Williams");

// console.log(sam);
// console.log(Employee.prototype === sam.__proto__);

Employee.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

//console.log(sam.getFullName());


//Creating a copy of the method

var Engineer = function(firstName, lastName, field) {
Employee.call(this, firstName, lastName);
this.field = field;
};

//Refrain of doing the below as this will change also the date in Employee when changes made in Engineer
// Engineer.prototype = Employee.prototype

//Instead use this, it will create copy of Employee.prototype
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

Engineer.prototype.getDescription = function () {
    return this.getFullName() + " is " + this.field + "Engineer";
};

var sam1 = new Engineer("Sam", "Williams", "Software");
//console.log(sam1);
//console.log(sam1.getFullName());
//console.log(sam1.getDescription());







/* ES6 Class */

class EmployeeES6 {
    constructor (firstName, lastName) {
//        console.log("Inside EmployeeES6");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName () {
        return this.firstName + " " + this.lastName;
    }
}

var sammy = new EmployeeES6 ("Sammy", "Winchester");
// console.log(sammy);
// console.log(sammy.getFullName());
// console.log(EmployeeES6.prototype === sammy.__proto__);


//to copy the prototype of EmployeeES6 to EngineerES6
class EngineerES6 extends EmployeeES6 {
//if no contructor has been defined, it will automatically create
// constructor(...args) {
//    super (...args);
//}
    constructor(firstName, lastName, field) {
        super(firstName, lastName);
        this.field = field;
    }

    //static is to put greeting only in class not in prototype
    //static can only be accessed via class
    static greeting () {
        return "sayHi";
    }

    getDescription() {
        return this.getFullName() + " is " + this.field + "Engineer";
    }
}

var sammy1 = new EngineerES6 ("Sammy", "Winchester", "Electronics");
console.log(EngineerES6.greeting());
console.log(sammy1.getDescription());
//console.log(sammy1.getFullName());
//console.log(sammy1.getDescription());


