/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = (s) => {
    let longest = s.length > 0 ? s.charAt(0) : ''
    let lastIndex = s.length

    for ( let left = 0; left < lastIndex; left++ ){
        for ( let right = lastIndex; right >= 0; right-- ){
            let window = s.substring(left,right)
            if ( window.length <= longest.length ){
                break
            } else if ( isPalindromic( window ) ){
                longest = window
                break
            }
        }
        if ( lastIndex - left < longest.length ) break
    }
    return longest
};

const isPalindromic = (s) => {
    if (s.length <= 1 ) return true
    const mid = Math.floor(s.length/2)
    const max = s.length - 1 
    for ( let i = 0; i < mid; i++ ){
        if ( s.charAt(i) != s.charAt(max-i) ) return false
    }
    return true
}

const runTest = (s) => {
    console.log(longestPalindrome(s))
}

runTest('aba')
runTest('abbcccbba')
runTest('notapalindrome')
runTest('')
runTest('a')
