let string = ("The Quick Brown Fox")

function swapCase(string){
    word = string.split(' ');
      return  word.map( i =>  {
      return  i[0].toLowerCase() + (i.slice(1)).toUpperCase()
      }).join(" ");
  }swapCase(string)

  console.log(swapCase(string))
  