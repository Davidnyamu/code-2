let numbers = [1,2,3,4,5,6,7,8,9,10]
function generatePrimeNumbers(array){
    let result = [];
      for( value of array){
        if((value % 2) > 0 && (value % 3) > 0  && value !== 1 || value === 3 || value === 2)
        {  result.push(value) }
      }
      return result;
  }

  console.log(generatePrimeNumbers(numbers))