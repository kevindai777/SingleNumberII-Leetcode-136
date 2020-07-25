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


//O(n) solution that uses NOT, AND, and XOR to find the unique element

let seenOnce = 0
let seenTwice = 0

for (let num of nums) {
    //first appearance: add to seenOnce, don't update seenTwice
    //second appearance: remove from seenOnce, add to seenTwice
    //third appearance: don't add to seenOnce since it's in seenTwice, remove from seenTwice

    //NOT seen_twice AND (CHANGE seen_once)
    //NOT seen_once AND (change seen_twice)
    seenOnce = ~seenTwice & (seenOnce ^ num)
    seenTwice = ~seenOnce & (seenTwice ^ num)
}

return seenOnce
