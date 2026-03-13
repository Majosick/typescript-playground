// ============================================
// PALINDROME CHECKER
// ============================================

/**
 * Checks if a string reads the same forwards and backwards.
 * Case-sensitive. Only works with simple strings.
 */
function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}
// use way with arrows instead
/**
 * Case-insensitive palindrome check with punctuation removal.
 * Real-world version for testing user inputs.
 */
function isPalindromeRealWorld(input: string): boolean {
    const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// ============================================
// TEST CASES (Manual "Unit Tests")
// ============================================

function testPalindromes(): void {
    console.log('🔍 Testing isPalindrome()...');
    
    // Test 1: Obvious palindrome
    console.assert(isPalindrome('racecar') === true, 
        'racecar should be palindrome');
    
    // Test 2: Not a palindrome
    console.assert(isPalindrome('hello') === false,
        'hello should NOT be palindrome');
    
    // Test 3: Empty string
    console.assert(isPalindrome('') === true,
        'Empty string is trivially palindrome');
    
    // Test 4: Single character
    console.assert(isPalindrome('a') === true,
        'Single char is palindrome');
    
    // Test 5: Case sensitivity (important!)
    console.assert(isPalindrome('Racecar') === false,
        'Racecar (capital R) should fail - case sensitive!');
    
    // Test real-world version
    console.assert(isPalindromeRealWorld('A man, a plan, a canal: Panama!') === true,
        'Should handle spaces, punctuation, and case');
    
    console.log('✅ All palindrome tests passed!\n');
}

// ============================================
// PERFORMANCE & NOTES
// ============================================

/*
TIME COMPLEXITY: O(n) - reverse() iterates through string
SPACE COMPLEXITY: O(n) - creates reversed copy

QA INSIGHTS:
1. Real user data has spaces/punctuation - need cleaning
2. Unicode/emojis break simple reversal
3. Consider: should numbers be allowed? "12321"
4. Large inputs (10k chars) - memory concern?
*/

// Run tests
testPalindromes();