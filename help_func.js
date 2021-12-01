function validValues(arr, number) {
    let flag = true;
    arr.forEach((element) => {
      if (typeof element !== "number") {
        console.log("Los elementos deben ser numéricos");
        flag = false;
        return false;
      }
      if (Math.abs(element) > number) {
        console.log(
          `Los elementos válidos deben encontrarse en un rango de ${number} a -${number}`
        );
        flag = false;
        return false;
      }
    });
  
    if (flag) console.log("Los elementos son válidos para la operación.");
    return flag;
  }
  
  
module.exports = validValues;