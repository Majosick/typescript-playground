// Finding duplicates
const findDuplicates = <T>(arr: T[]): T[] => {
    const duplicates: T[] = [];
    const seen = new Set<T>();
    
    for (const item of arr) {
        if (seen.has(item) && !duplicates.includes(item)) {
            duplicates.push(item);
        }
        seen.add(item);
    }
    return duplicates; 
};

const numbersWithDupes: number[] = [1, 2, 3, 2, 4, 5, 3, 6, 1];
console.log('Duplicates:', findDuplicates(numbersWithDupes));

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
console.log('Min:', findMin([3, 1, 4, 1, 5, 9, 2]));

// Custom sorting
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: 'Laptop', price: 999 },
    { name: 'Mouse', price: 29 },
    { name: 'Keyboard', price: 79 },
    { name: 'Monitor', price: 299 },
];

// Sort by price ascending
const sortedByPrice = [...products].sort((a: Product, b: Product): number => 
    a.price - b.price
);

// Sort by name alphabetically
const sortedByName = [...products].sort((a: Product, b: Product): number => 
    a.name.localeCompare(b.name)
);

console.log('Sorted by price:', sortedByPrice);
console.log('Sorted by name:', sortedByName);