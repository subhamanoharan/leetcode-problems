/**
 * You have a long flowerbed in which some of the plots are planted, and some are not. 
 * However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, 
 * and an integer n, return true if n new flowers can be planted in the flowerbed 
 * without violating the no-adjacent-flowers rule and false otherwise.
 * https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const getFreePlots = (flowerbed) => {
  let freePlots = 0;
  for(let i=0; i< flowerbed.length ; i++){
    let plot = flowerbed[i]
    const neighbour1 = i-1 >= 0 ? flowerbed[i-1] : 0;
    const neighbour2 = i+1 < flowerbed.length ? flowerbed[i+1] : 0;
    if(neighbour1 === 0 && neighbour2 === 0 && plot === 0){
      freePlots++
      flowerbed[i] = 1
    }
  }
  return freePlots
}

var canPlaceFlowers = function(flowerbed, n) {
  const freePlotsCount = getFreePlots(flowerbed)
  return freePlotsCount >= n;
};

export default canPlaceFlowers;