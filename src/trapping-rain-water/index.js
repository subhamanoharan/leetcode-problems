/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let total = 0, i=0;
  while(i<height.length -1){
    const current = height[i]
    let stopIndex = -1
    if(current == 0){
      i++
      continue;
    }
    for(let j=i+1, localMax = height[i +1]; j< height.length; j++){
        const next = height[j]
        if(next >= current){
          localMax = next
          stopIndex = j
          break;
        } else if(next > localMax) {
          localMax = next
          stopIndex = j
        }
    }
    if(stopIndex === -1) {
      i++
    } else {
      const localMaxToCalc = Math.min(height[i], height[stopIndex])
      let unitsTrapped = 0
      for(let j=i+1; j < stopIndex; j++){
        unitsTrapped+= localMaxToCalc - height[j]
      }
      total += unitsTrapped
      i = stopIndex
    }
  }
  return total
};

export default trap;
