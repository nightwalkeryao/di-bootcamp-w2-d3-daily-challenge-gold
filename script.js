// Daily Challenge GOLD: Bubble Sort

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8]
console.log("Number: " + numbers)
// 1. Using the .toString() method convert the array to a string.
let numbersStr = numbers.toString()
// 2. Using the .join() method convert the array to a string. Try passing different values into the join.
let join1 = numbers.join(',')
let join2 = numbers.join('-')
let join3 = numbers.join('/')
// 3. Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).

for (let i = 1; i < numbers.length; i++) {
    // from the second element to the lastest one
    for (let j = 0; j < numbers.length-1; j++) {
        // from the first element to the element before the lastest
        // so we can compare the current element to the previous one until we reach the end of the list
        if (numbers[i] > numbers[j]) {
            let temp = numbers[j] // used to store temporary value for swap
            numbers[j] = numbers[i] // swapping
            numbers[i] = temp
        }
    }
}
console.log("Sorted numbers: " + numbers)