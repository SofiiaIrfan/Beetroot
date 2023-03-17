const isPerfect = (num) => {
    let sum = 0;

    for (let i = 0; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num && sum !== 0 ? true : false;
};

// isPerfect(6);
let arr = [];
const minValPerfect = +prompt('Perfect Numbers\nEnter min value');
const maxValPerfect = +prompt('Perfect Numbers\nEnter max value');
const checkForPerfect = (minValPerfect, maxValPerfect) => {
    for (let i = minValPerfect; i <= maxValPerfect; i++) {
        if(isPerfect(i)){
            arr.push(i);
        }
    }
console.log(arr);
};

checkForPerfect(minValPerfect, maxValPerfect);
