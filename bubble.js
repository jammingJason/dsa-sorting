function bubbleSort(arr) {
  let pass = false;
  let newArray = [];
  let vistedArray = [];
  let topDog = arr[0];
  let count = 0;
  const findHighest = () => {
    for (let i = 0; i < arr.length; i++) {
      if (!newArray.includes(arr[i])) {
        if (arr[i] > topDog) {
          topDog = arr[i];
          count++;
        }
      }
    }
    newArray.unshift(topDog);
    topDog = 0;
  };

  //  Push the Largest Value to the end of newArray
  while (newArray.length < arr.length) findHighest();
  return newArray;
  // while (newArray.length !== arr.length) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!newArray.includes(arr[i])) {
  //       if (topDog < arr[i]) {
  //         topDog = arr[i];
  //         console.log(topDog);
  //       }
  //       newArray.push(topDog);
  //       topDog = 0;
  //     }
  //   }
  //   // newArray.push(topDog);
  //   console.log(newArray);
  // }
}
bubbleSort([6, 4, 54, 20, 12, 140, 7, 9]);
module.exports = bubbleSort;
