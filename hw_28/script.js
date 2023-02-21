"use strict"



//script for circle area

document.getElementById("circleRadiusButton").addEventListener("click", circleAreaFormula);

function circleAreaFormula() {
    let formData = document.querySelector("#circleRadiusInput").value;
    if (formData > 0) {
        let countedCircleArea = formData ** 2 * Math.PI;
        document.querySelector('#circleRadiusResult').innerHTML = `<p style="color: #FF1493;"> ${countedCircleArea} square pixels!</p>`;
    }
    else {
        document.querySelector('#circleRadiusResult').innerHTML = "<p>Please, enter valid number > 0</p>";
    }
};



//script for speed

document.querySelector("#startCounting").addEventListener("click", speedFormula);

function speedFormula() {
    
    let userDistanceInput = parseFloat(document.querySelector("#userDistanceInput").value);
    let userTimeInput = parseFloat(document.querySelector("#userTimeInput").value);
    
    if (userDistanceInput > 0 && userTimeInput > 0) {
        let speedResult = userDistanceInput / userTimeInput;
        document.getElementById("countedSpeedOutput").innerHTML = `<p style="color: #FF1493;"> You need to ride ${speedResult} km/h to get there in time!</p>`;
    }
    else {
        document.getElementById("countedSpeedOutput").innerHTML = "<p>Please, enter the number > 0</p>";
    }
    
}


//script for currency

document.querySelector("#countUserDollars").addEventListener("click", countEuro);

function countEuro() {
    let userDollarInput = parseFloat(document.querySelector("#userDollarInput").value);
    if (userDollarInput > 0) {
        let countedEuros = userDollarInput * 0.94;
        document.querySelector("#summInEuro").innerHTML = `<p style="color: #FF1493;">You've got ${countedEuros} euro!</p>`;
    }
    else if (userDollarInput == 0) {
        document.querySelector("#summInEuro").innerHTML = "<p>You've got 0 euro!</p>";
    }
    else {
        document.querySelector("#summInEuro").innerHTML = "<p>Please, enter valid number: 0 or higher</p>";
    }

}

