function merge(arr1, arr2) {
  let newArray = [];
  let topDog = 0;
  const findLargest = () => {
    arr1.map((data1) => {
      if (!newArray.includes(data1)) {
        if (data1 > topDog) topDog = data1;
        arr2.map((data2) => {
          if (!newArray.includes(data2)) {
            console.log(data2);
            if (data2 > data1) {
              if (data2 > topDog) topDog = data2;
            }
          }
        });
      }
    });
    return topDog;
  };
  while (newArray.length < arr1.length + arr2.length) {
    topDog = 0;
    newArray.unshift(findLargest());
  }
  console.log(newArray);
}

function mergeSort(arr) {
  const mid = Math.floor(arr.length / 2);

  let arr1 = arr.splice(0, mid);
  //   console.log(arr1);
  let arr2 = arr;
  //   console.log(arr2);

  while (arr1.length > 2) mergeSort(arr1);
  while (arr2.length > 2) mergeSort(arr2);
  buildTree(arr1, arr2);
  //   merge(arr1, arr2);
}

const buildTree = (arr1, arr2) => {
  console.log(arr1, arr2);
};

mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// mergeSort([1, 2, 3]); // [1, 2, 3]
// mergeSort([]);

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
//     453, 546, 75, 67, 4342, 32
// ];

// mergeSort(nums);
module.exports = { merge, mergeSort };
