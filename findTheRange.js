// Start
let array = [4, 20, 60, 90, 69, 9, 11]

let smallest = array[0]
let largest = array[0]

for (let i = 0; i < array.length; i++) {
  if (smallest > array[i]) {
    smallest = array[i]
  } else if (largest < array[i]) {
    largest = array[i]
  }
}
console.log(smallest, largest)