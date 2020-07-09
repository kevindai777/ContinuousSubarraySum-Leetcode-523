//Objective is to find whether there is a continuous subarray that has a 
//sum that is a product of k and is of length greater than 1

let nums = [23, 2, 4, 6, 7], k=6


//O(n) solution that uses a hashmap to keep track of the mods of each 
//cumulative sum.

//Start with index '-1'
let map = {0: -1}
let sum = 0
    
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
        
    //Mod the sum as long as the mod isn't 0
    if (k !== 0) {
        sum = sum % k    
    }

    //If the mod occurred already, also check if it has length greater than 2
    if (map[sum] !== undefined) {
        if (i - map[sum] > 1) {
            return true
        }
    //Otherwise, if it hasn't occurred yet, map it
    } else {
        map[sum] = i
    }
}
    
return false