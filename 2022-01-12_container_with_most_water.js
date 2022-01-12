/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let maxArea = 0
    let right = height.length - 1
    let left = 0

    while ( left < right ) {
        let area = Math.min(height[left],height[right]) * (right-left)

        if ( area > maxArea ) maxArea = area

        if ( height[left] > height[right] ){
            right--;
        } else {
            left++;
        }
    }
    return maxArea
};


maxArea([1,8,6,2,5,4,8,3,7]) // 49
maxArea([1,1]) // 1