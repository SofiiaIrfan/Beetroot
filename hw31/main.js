function guessGame() {
    let userNumber = alert('Think of a number between 0 and 100!'); 
    let guess = prompt('Is your number > 50 < 50 or == 50 ? Enter: <, > or ==:');
    let min = 0;                             
    let middle = 50;                          
    let max = 100;                              
    while (guess != '==') {    
        if (guess == '>') {                        
            min = middle;                      
            range = max - min;                     
            rangeHalf = range / 2;                  
            rangeHalf = Math.floor(range / 2);      
            let center = min + rangeHalf;           
            middle = center;   
            let guessAgain = prompt('Is your number > ' + middle + ' < ' + middle + ' or == ' + middle + ' ? Enter: <, > or ==:'); 
            guess = guessAgain;
        }
        if (guess == '<') {                                
            max = middle                               
            range = max - min;                             
            rangeHalf = range / 2;                         
            rangeHalf = Math.floor(range / 2);             
            let center = min + rangeHalf;                   
            middle = center;
            let guessAgain = prompt('Is your number > ' + middle + ' < ' + middle + ' or == ' + middle + ' ? Enter: <, > or ==:'); 
            guess = guessAgain;
        }
    }    
    answer = alert('Your number was: ' + middle + '!!')
}


function multiplicationTableBuilder(min = 2, max = 9) {
    let row = "";
    let arr = [];
    for (let i = min; i <= max; i++) {
      for (let j = 1; j <= 10; j++) {
        row += `${i}*${j}=${+i * +j} `;
      }
  
      arr.push(row);
      // console.log(arr);
      row = "";
    }
    return arr;
  }
  

  
  function dateCalculation(year = "2022", month = "12", day = "12", add = "1") {
    year = Number(year);
    month = Number(month) - 1;
    day = Number(day);
    add = Number(add);
  
    let userDate = new Date(year, month, day);
    userDate.setDate(userDate.getDate() + add);
  
    const dateOptions = {
      era: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      timezone: "UTC",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
  
    return userDate.toLocaleString("en-us", dateOptions);
  }
  
  export { guessNumber, multiplicationTableBuilder, dateCalculation };
  
