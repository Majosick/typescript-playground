interface User {
    id: number;
    name: string;
    age: number;
    active: boolean;
}

const users: User[] = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true },
    { id: 4, name: 'David', age: 20, active: true },
];

// Map: Transform array
const names: string[] = users.map((user: User): string => user.name);
const ages: number[] = users.map(user => user.age);
console.log('Names:', names);
console.log('Ages:', ages);

// Filter: Select elements
const activeUsers: User[] = users.filter((user: User): boolean => user.active);
const adults: User[] = users.filter(user => user.age >= 25);
console.log('Active users:', activeUsers.length);
console.log('Adults:', adults.length);

// Reduce: Accumulate values
const totalAge: number = users.reduce((sum: number, user: User): number => {
    return sum + user.age;
}, 0);
console.log('Total age:', totalAge);

const ageStats = users.reduce((acc, user) => {
    acc.total += user.age;
    if (user.age < acc.min) acc.min = user.age;
    if (user.age > acc.max) acc.max = user.age;
    return acc;
}, { total: 0, min: Infinity, max: -Infinity });
console.log('Age stats:', ageStats);