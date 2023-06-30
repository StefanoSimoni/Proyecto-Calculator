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
                    if(firstNumber != 0) {
                        secondNumber = parseInt(numbers.join(""))
                        numbers = []
                    }
                } else {
                    if(firstNumber == 0) {
                        firstNumber = parseInt(numbers.join(""))
                        resultScreen.innerHTML = ""
                        numbers = []
                        operator = key.textContent
                    }
                }
            } else if(key.textContent == "C") {
                resultScreen.innerHTML = ""
                numbers = []
                firstNumber = 0
                operator = ""
                secondNumber = 0
            } else if(key.textContent == "=") {
                resultScreen.innerHTML = ""
                numbers = []
                let operation = operate(firstNumber, operator, secondNumber)
                resultScreen.textContent = operation
                firstNumber = operation
                operator = ""
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