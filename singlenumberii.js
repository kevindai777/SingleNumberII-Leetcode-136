//Objective is similar to 'Single Number' but this time each number except one appears
//3 times instead of 2.

let nums = [0,1,0,1,0,1,99]


//O(n) solution that uses a hashmap to find the frequencies of each number.

let map = {}
    
for (let num of nums) {
    if (map[num] == undefined) {
        map[num] = 1
    } else {
        map[num]++
    }
}
    
for (let [key,value] of Object.entries(map)) {
    if (value !== 3) {
        return key
    }
}