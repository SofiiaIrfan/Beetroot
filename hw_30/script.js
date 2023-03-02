

function countChocolates() {

    let userPrice = +prompt("What is the cost of one chocolate bar?");
    let userMoney = +prompt("Enter the amount of money");

    if ((userPrice > 0) && (userMoney >= 0)) {
        let changeResult = userMoney % userPrice;
        let chocolateResult = Math.floor(userMoney / userPrice);
        alert(`Quantity of chocolate: ${chocolateResult}. The remaining money: ${changeResult}`);

    }
    else {
        alert("Please, enter valid data and press Enter. All numbers must be bigger than 0");
        countChocolates()
    }

}

countChocolates();



function backwardDigit(){
    let userDigit = +prompt("Enter a three-digit number");
    if (userDigit > 99 && userDigit < 1000) {
        console.log(
        userDigit % 10,
        Math.floor((userDigit % 100) / 10),
        Math.floor(userDigit / 100)
        );
    } else {
        alert("You entered a number other than three digits");
    }

}
backwardDigit()

//script for deposit calculator



function calculateIncome(){
    let user_deposit = +prompt("Enter your deposit");
    let first_month = user_deposit * (5 / 100 / 12);
    let second_month = (user_deposit + first_month) * (5 / 100 / 12);
    console.log(`Amount of accrued charges ${first_month + second_month}`);
}
calculateIncome()

    // 2 && 0 && 3 => 0
    // 2 || 0 || 3 => 2
    // 2 && 0 || 3 => 3
