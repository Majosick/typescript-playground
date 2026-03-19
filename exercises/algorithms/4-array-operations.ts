// Finding duplicates
const findDuplicates = <T>(arr: T[]): T[] => {
    const seen: Set<T> = new Set<T>();
    const duplicates: Set<T> = new Set<T>();

    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        }
        seen.add(item);
    }
    return Array.from(duplicates);
};

const numbersWithDupes: number[] = [1, 2, 3, 2, 4, 5, 3, 6, 1, 3, 8];
//console.log('Duplicates:', findDuplicates(numbersWithDupes));

// Finding max/min
const findMax = (arr: number[]): number => {
    // Method 1: Spread operator
    // return Math.max(...arr);

    // Method 2: Reduce
    return arr.reduce((max, num) => num > max ? num : max, -Infinity);
};

const findMin = (arr: number[]): number => {
    // Method 1: Spread operator
    // return Math.min(...arr);

    // Method 2: Reduce
    return arr.reduce((min, num) => num < min ? num : min, Infinity);
};

console.log('Max:', findMax([3, 1, 4, 1, 5, 9, 2]));
console.log('Max:', findMax([]));
console.log('Min:', findMin([3, 1, 4, 1, 5, 9, 2]));

// Custom sorting
interface Prod {
    name: string;
    price: number;
}

const products: Prod[] = [
    { name: 'BLaptop', price: 999 },
    { name: 'AMonitor', price: 299 },
    { name: 'Mouse', price: 29 },
    { name: 'AKeyboard', price: 79 },
];

// Sort by price ascending
const sortedByPrice = [...products].sort((a: Prod, b: Prod): number =>
    a.price - b.price
);

// Sort by name alphabetically
const sortedByName = [...products].sort((a: Prod, b: Prod): number =>
    a.name.localeCompare(b.name)
);


console.log('Sorted by name:', sortedByName);
console.log('Sorted by price:', sortedByPrice);