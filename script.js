function printDisplay(num) {
    document.getElementById("display-value").innerText = num;
}
// printDisplay('5*5')


function printOutput(num) {
    document.getElementById("output-value").innerText = num;
}
// printOutput('123345')



const operator = document.querySelectorAll(".operator");
console.log(operator);



for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", () => {
        // alert(operator[i].id)
        const display = document.getElementById("display-value");
        display.innerText += operator[i].innerText
        printOutput("")
        console.log(operator[i]);

        if ((operator[i].id == "clear")) {
            printOutput("")
            printDisplay("")


        } else if (operator[i].id == "gleich") {
            output.innerText = eval(display.innerText);

            console.log(eval(display.innerText));
        }

    });
}

const number = document.querySelectorAll(".number");
console.log(number);


for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", () => {
        // alert(number[i].id
        const output = document.getElementById("output-value");
        console.log(number[i].innerText)
        const display = document.getElementById("display-value");

        output.innerText += number[i].innerText

        display.innerText += number[i].innerText
    });
}