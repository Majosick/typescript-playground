//Classic for loop
for (let i: number = 0; i < 5; i++) {
    console.log(`Classic for: ${i}`);
}

// for...of loop (for arrays, strings, etc.)
const numbers: number[] = [2, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(`for...of: ${num+1}`);
}

// for...in loop (for object keys)
const person: Record<string, any> = { name: 'John', age: 30, dead: true };
for (const key in person) {
    console.log(`for...in: ${key} = ${person[key]}`);
}

//forEach (array method)
const numbers2: number[] = [2, 2, 3, 4, 5];
numbers2.forEach((num: number, index: number) => {
    console.log(`forEach: index ${index}, value ${num}`);
});

// while loop
let counter: number = 0;
while (counter < 3) {
    console.log(`While loop: ${counter}`);
    counter++;
}

// do...while loop
let i: number = 0;
do {
    console.log(`Do...while: ${i}`);
    i++;
} while (i < 3);



























