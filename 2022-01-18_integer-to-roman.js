/**
 * @param {number} num
 * @return {string}
 */

 var intToRoman = function(num) {
    let n = num.toString().split("").reverse().join("")
    let rnSet = [['I','V','X'],['X','L','C'],['C','D','M']]
    let rn = ''
    
    for (let j = 0; j < 3; j++){
        if (n.charAt(j)){
            let [i,v,x] = rnSet[j];
            rn = ['',i,i+i,i+i+i,i+v,v,v+i,v+i+i,v+i+i+i,i+x][n.charAt(j)] + rn
        } else {
            return rn
        }
    }

    if (n.length > 3){
        rn ='M'.repeat(parseInt(n.substring(3).split("").reverse().join("")))+rn
    } 
    return rn
};

console.log(intToRoman(3),"III")
console.log(intToRoman(58),"LVIII")
console.log(intToRoman(1994),"MCMXCIV")
