const resultScreen = document.getElementById("resultScreen")
const keys = document.querySelectorAll("button")

const fillScreen = () => {
    let firstNumber = 0
    let operator = ""
    let secondNumber = 0
    let numbers = []
    keys.forEach((key) => {
        key.addEventListener("click", () => {
            if((key.textContent != "C") && (key.textContent != "=")) {
                if((key.textContent != "+") && (key.textContent != "-") && (key.textContent != "x") && (key.textContent != "/")) {
                    numbers.push(key.textContent)
                    resultScreen.textContent = numbers.join("")
                } else {
                    if(firstNumber == 0) {
                        firstNumber = parseInt(numbers.join(""))
                        resultScreen.innerHTML = ""
                        numbers = []
                        operator = key.textContent
                    } else {
                        if(firstNumber != 0) {
                            secondNumber = parseInt(numbers.join(""))
                            numbers = []
                        }
                        let operation = operate(firstNumber, operator, secondNumber);
                        firstNumber = operation;
                        operator = key.textContent;
                        secondNumber = 0;
                        resultScreen.innerHTML = ""
                        numbers = []
                        resultScreen.textContent = firstNumber;
                    }
                }
            } else if(key.textContent == "C") {
                resultScreen.innerHTML = ""
                numbers = []
                firstNumber = 0
                operator = ""
                secondNumber = 0
                //RESOLVER EL PROBLEMA DEL ENCADENAMIENTO DE OPERACIONES UNA VEZ QUE SE APRIETA "="
            } else if(key.textContent == "=") {
                if(firstNumber != 0) {
                    secondNumber = parseInt(numbers.join(""))
                    numbers = []
                }
                resultScreen.innerHTML = ""
                let operation = operate(firstNumber, operator, secondNumber)
                resultScreen.textContent = operation
                firstNumber = operation
                operator = ""
                console.log(operator)
                secondNumber = 0                
            }
        })
    })
}

const sum = (a, b) => {
    return a + b
}

const minus = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}

const operate = (firstNumber, operator, secondNumber) => {
    switch(operator) {
        case "+":
            return sum(firstNumber, secondNumber)
        case "-":
            return minus(firstNumber, secondNumber)
        case "x":
            return multiply(firstNumber, secondNumber)
        case "/":
            return divide(firstNumber, secondNumber)
        default:
            return "ERROR"
    }
}

fillScreen()