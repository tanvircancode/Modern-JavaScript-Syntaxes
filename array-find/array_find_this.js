class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("Hello");
    }
    exampleFunction() {
        let array = [1, 2, 3, 4];
        array.find(function() {
            this.test();
        },this);
    }

    //function using arrow function
    // exampleFunction() {
    //     let array = [1, 2, 3, 4];
    //     array.find(() => {
    //         this.test();
    //     });
    // }
}

let stud = new Student("Tanvir",25);
stud.exampleFunction();