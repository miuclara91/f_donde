/*
Ex 1.
Given an array of integers, find the pair of adjacent elements 
that has the largest product and return that product.
Guaranteed constraints:
    2 ≤ inputArray.length ≤ 10,
    -1000 ≤ inputArray[i] ≤ 1000.

*/

const arr1 = [1000, 90, -1000];
const validValues = require("./help_func");

const findPair = (arr) => {
  if (arr.length <= 1 || arr.length > 10) {
    return "El array debe tener más de un elemento como mínimo o menos de 11 elementos.";
  }

  if (!validValues(arr, 1000)) return "Revisa los valores de tu array.";

  const newArr = [];

  arr.forEach((element, index) => {
    if (arr[index + 1] == undefined) return;
    newArr.push(element * arr[index + 1]);
  });

  const bigN = Math.max(...newArr);

  const pairsN = {
    num1: 0,
    num2: 0,
  };

  const indexBigN = newArr.indexOf(bigN);
  pairsN.num1 = arr[indexBigN];
  pairsN.num2 = arr[indexBigN + 1];

  return `El resultado más alto fue de ${bigN} con los números ${pairsN.num1} y ${pairsN.num2}`;
};



console.log(findPair(arr1));