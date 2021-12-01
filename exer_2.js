/*
Ex 2.
Given a sequence of integers as an array, determine whether it is possible to obtain
 a strictly increasing sequence by removing no more than one element from the array.
 2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.
•	[output] boolean
o	Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

*/

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const arr1 = [];
for (let index = 0; index < 105; index++) {
  let randomN = getRandomArbitrary(-105, 105);
  arr1.push(randomN);
}

const arr2 = [10, 9, -106];
const validValues = require("./help_func");

const sequenceInc = (arr) => {
  if (arr.length <= 1 || arr.length > 105) {
    return "El array debe tener más de un elemento como mínimo o menos de 106 elementos.";
  }

  if (!validValues(arr, 105)) return "Revisa los valores de tu array.";

  let count = 0;
  let flag = true;

  for (let i = 0; i < arr.length; i++) {
    if (count > 1) {
      flag = false;
      break;
    }

    if (arr[i] > arr[i + 1]) {
      count++;
      const elementDelete = arr.splice(i, 1);
      console.log(`El elemento eliminado fue ${elementDelete}`);
    }
  }

  return flag;
};

console.log(sequenceInc(arr1));
