// An array is an ordered collection of elements, usually of the same type, with a dynamic (changeable) length.
// let numbers: number[] = [1, 2, 3]

//A tuple is an ordered collection of values with a fixed length, where each position has a defined type.
//let user: [number, string] = [1, 'Chris']

//An enum is a data structure that defines a fixed set of named constant values.
// const small = 1
// const medium = 2
// const large = 3
// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium
// console.log(mySize);

//A function is a reusable block of code that performs a specific task, can take inputs (parameters), and may return a value.
// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022)
//         return income * 1.2
//     return income * 1.3
// }

// calculateTax(10_000);

// An object is a concrete entity that holds data (properties) and behavior (methods). It can be created directly as object literal 
// or as an instance of a class. Example: a cat can be an object of class Animal, with a property like age and a method like meow or 

//#toDO come back to cats 
// {
//     const cat = {
//         name: "Whiskers",
//         age: 2,
//         meow: () => console.log("Meow!")
//     }
//     cat.meow()
// }

// {
//     class Animal {
//         constructor(public name: string) {}
//         speak() { console.log(`${this.name} makes a sound`) }
//     }

//     const cat = new Animal("Whiskers")
//     cat.speak()
// }


//1st obj lesson 
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'Chris',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }
// employee.retire(new Date())

//2nd obj lesson
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: 'Chris',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }
// employee.retire(new Date())


