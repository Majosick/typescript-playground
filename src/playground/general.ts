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

// -------------------An object is a concrete entity that holds data (properties) and behavior (methods). It can be created directly as object literal 
// or as an instance of a class. Example: a cat can be an object of class Animal, with a property like age and a method like meow or 

//First approach – Type inference (pol. wnioskowanie typu)
// {
//     let cat = {
//         name: "Whiskers",
//         age: 2,
//         meow: () => console.log("Meow!")
//     }
//     cat.meow()
// }


// //Second approach – Explicit object type
// {
//     let cat: {
//         readonly name: string,
//         age: number,
//         meow2: () => void
//     } = {
//         name: 'Kotka',
//         age: 34,
//         meow2: () => {
//             console.log('meow');
//         }
//     }
//     cat.meow2()
// }

// // best practice, extract type (pol. wyodrebnij typ). Often even better than exctract class
// {
//     type Cat = {
//         readonly name: string
//         age: number
//         meow: () => void
//     }

//     let cat: Cat = {
//         name: "Whiskers",
//         age: 2,
//         meow: () => console.log("BEAST Meow!")
//     }
//     cat.meow()
// }


// {
//     class Animal {
//         constructor(public name: string) { }
//         speak() { console.log(`${this.name} makes a sound`) }
//     }

//     const cat = new Animal("Whiskers")
//     cat.speak()
// }



// //1st obj lesson
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


// A function is part of reusable code
// It can take inputs (parameters), optionally return an output (return value),
// and can be called/invoked multiple times with different arguments.

// function kgToLbs(weight: number | string): number {
//     //Narrowing
//     if (typeof weight === 'number')
//         return weight * 2.2
//     else
//         return parseInt(weight) * 2.2
// }

// console.log(kgToLbs(10));
// console.log(kgToLbs('10kg'));

//intersection types - variables has multiple types

// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => { },
//     resize: () => { }
// }

//literal types
// type Quantity = 50 | 100
// let quantity: Quantity = 50

// type Metric = 'cm' | 'inch'
// let lenght: Metric = 'cm'


//nullable types
// function greet(name: string | null | undefined) {
//     if (name)
//         console.log(name.toUpperCase())
//     else
//         console.log("Hola")
// }

// greet(undefined)





//optional chaining
// type Customer = {
//     birthday?: Date
// }

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : { birthday: new Date() }
// }

// let customer = getCustomer(1)
// //if(customer !== null && customer !== undefined)
// //optional property acces operator
//     console.log(customer?.birthday?.getFullYear());

// //Optional element access operator
// // customers?.[0]

// //Optional call
// let log: any = null
// log?.('a')
