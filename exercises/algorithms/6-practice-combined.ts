// // Problem: Find most frequent character in a string
// const mostFrequentChar = (str: string): string => {
//     const charMap = new Map<string, number>();
    
//     for (const char of str.toLowerCase()) {
//         if (char === ' ') continue; // Skip spaces
//         charMap.set(char, (charMap.get(char) || 0) + 1);
//     }
    
//     let maxChar: string = '';
//     let maxCount: number = 0;
    
//     for (const [char, count] of charMap) {
//         if (count > maxCount) {
//             maxChar = char;
//             maxCount = count;
//         }
//     }
    
//     return maxChar;
// };

// console.log('Most frequent char in "hello world":', mostFrequentChar('hello world'));

// // Problem: Array intersection
// const arrayIntersection = <T>(arr1: T[], arr2: T[]): T[] => {
//     const set1 = new Set(arr1);
//     return arr2.filter(item => set1.has(item));
// };

// console.log('Intersection:', arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));

// // Problem: Chained array operations
// const processUsers = (users: User[]): string[] => {
//     return users
//         .filter(user => user.active && user.age >= 21)
//         .map(user => `${user.name} (${user.age})`)
//         .sort();
// };

// console.log('Processed users:', processUsers(users));