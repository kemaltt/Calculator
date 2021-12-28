function printDisplay(num) {
    document.getElementById("display").innerText = num;
}
// printDisplay('5*5')

function printOutput(num) {
    document.getElementById("output").innerText = num;
}
// printOutput('123345')


const clear = document.querySelectorAll(".operator-white");
console.log(clear);

// 
for (let i = 0; i < clear.length; i++) {
    clear[i].addEventListener("click", () => {

        if (clear[i].id == "C") {
            printOutput("");
            printDisplay("");
        } else if (clear[i].id == "CE") {
            output.innerText = output.innerText.slice(0, -1);
            display.innerText = display.innerText.slice(0, -1);

        }
    })
}


const operator = document.querySelectorAll(".operator-orange");
console.log(operator);
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", () => {

        const display = document.getElementById("display");
        const output = document.getElementById("output");


        display.innerText += operator[i].innerText;

        printOutput("");


        if (operator[i].id == "=") {
            const newDisplay = (display.innerText.slice(0, -1))
            console.log((newDisplay)); //NaN
            output.innerText = eval(newDisplay);
            console.log(display.innerText); //NaN
            printDisplay('')

        }
    });
}


const number = document.querySelectorAll(".number");
console.log(number);
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", () => {

        const output = document.getElementById("output");
        const display = document.getElementById("display")
        if (output.innerText == 0) {
            printOutput("");;
        }
        output.innerText += number[i].innerText;
        display.innerText += number[i].innerText;

        printOutput("")

    });
}