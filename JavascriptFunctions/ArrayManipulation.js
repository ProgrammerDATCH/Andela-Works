// console.log("Hello, World!");
function calculateAverageInArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
}


let arr1 = [6, 1, 3, 5, 9, 10, -1];
console.log(get2LargeNumbers(arr1));


function get2LargeNumbers(arr) {
  let firstLargeNumber = arr[0];
  let firstLargeNumberIndex = 0;
  //getting first large Number in the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargeNumber) {
      firstLargeNumber = arr[i];
      firstLargeNumberIndex = i;
    }
  }
  //getting the second large number in the array
  let secondLargeNumber = (firstLargeNumberIndex == 0) ? arr[1] : arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (firstLargeNumberIndex != i) {
      if (arr[i] > secondLargeNumber) {
        secondLargeNumber = arr[i];
      }
    }
  }

  let resultArr = [firstLargeNumber, secondLargeNumber];
  return resultArr;
}