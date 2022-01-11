/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s === '' ){
        return 0
    } else if (s.length===1) {
        return 1          
    } else {
        let maxLen = 1
        for ( let i = 0; i < s.length; i++){
            let s1 = s.substring(i)
            for ( let j = Math.min(s1.length+1,100); j--;){
                let s2 = s1.substring(0,j)
                if ( s2.length <= maxLen ) {
                    break;
                } else if (!hasRepeat(s2)) {
                    maxLen = s2.length   
                }
            }
        }
        return maxLen
    }
};

var hasRepeat = (s)=>{
    let rep = ""
    for (var i = 0; i<s.length; i++){
        if (rep.includes(s.charAt(i))){
            return true
        }
        rep += s.charAt(i)
    }
    return false
}
