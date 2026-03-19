// // 1. LINEAR SEARCH
// const linearSearch = (arr: number[], target: number): number => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) return i;
//     }
//     return -1;
// };

// // Example
// console.log(linearSearch([5, 2, 8, 1, 9], 8)); // 2

// // 2. BINARY SEARCH (for sorted arrays)
// const binarySearch = (arr: number[], target: number): number => {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
        
//         if (arr[mid] === target) return mid;
        
//         if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// };

// // Example
// console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3
// console.log(binarySearch([1, 3, 5, 7, 9], 4)); // -1

// // 3. BINARY SEARCH WITH GENERIC TYPE (simple version)
// const binarySearchGeneric = <T>(arr: T[], target: T, compareFn: (a: T, b: T) => number): number => {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         const comparison = compareFn(arr[mid], target);
        
//         if (comparison === 0) return mid;
        
//         if (comparison < 0) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// };

// // Example with numbers
// console.log(binarySearchGeneric([1, 3, 5, 7, 9], 5, (a, b) => a - b)); // 2

// // Example with strings
// const strings = ["apple", "banana", "cherry"];
// console.log(binarySearchGeneric(strings, "banana", (a, b) => a.localeCompare(b))); // 1