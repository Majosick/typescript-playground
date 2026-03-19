// String reversal
const reverseString = (str: string): string => {
    // Method 1: Built-in
    return str.split('').reverse().join('');
    
    // Method 2: Manual
    let reversed: string = '';
    for (let i: number = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

console.log('Reversed "hello":', reverseString('hello'));

// Palindrome check
const isPalindrome = (str: string): boolean => {
    const cleanStr: string = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Method 1: Compare with reverse
    // return cleanStr === cleanStr.split('').reverse().join('');
    
    // Method 2: Two-pointer approach (more efficient)
    let left: number = 0;
    let right: number = cleanStr.length - 1;
    
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) return false;
        left++;
        right--;
    }
    return true;
};

console.log('Is "racecar" palindrome?', isPalindrome('racecar'));
console.log('Is "hello" palindrome?', isPalindrome('hello'));

// Anagram check
const areAnagrams = (str1: string, str2: string): boolean => {
    const normalize = (s: string): string => 
        s.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    
    return normalize(str1) === normalize(str2);
};

console.log('Are "listen" and "silent" anagrams?', areAnagrams('listen', 'silent'));
console.log('Are "hell" and "world" anagrams?', areAnagrams('hell', 'world'));