const resultScreen = document.getElementById("resultScreen")
const keys = document.querySelectorAll("button")

const fillScreen = () => {
    let firstNumber = 0
    let operator = ""
    let secondNumber = 0
    let asd = []
    keys.forEach((key) => {
        key.addEventListener("click", () => {
            if((key.textContent != "C") && (key.textContent != "=")) {
                if((key.textContent != "+") && (key.textContent != "-") && (key.textContent != "x") && (key.textContent != "/")) {
                    asd.push(key.textContent)
                    resultScreen.textContent = asd.join("")
                } else {
                    if(firstNumber == 0) {
                        firstNumber = parseInt(asd.join(""))
                        resultScreen.innerHTML = ""
                        asd = []
                        operator = key.textContent
                    } else {
                        secondNumber = parseInt(asd.join(""))
                        asd = []
                    }
                }
            } else if(key.textContent == "C") {
                resultScreen.innerHTML = ""
                asd = []
                firstNumber = 0
                operator = ""
                secondNumber = 0
            } else if(key.textContent == "=") {
                resultScreen.innerHTML = ""
                asd = []
                resultScreen.textContent = operate(firstNumber, operator, secondNumber)
                firstNumber = 0
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
        case "*":
            return multiply(firstNumber, secondNumber)
        case "/":
            return divide(firstNumber, secondNumber)
        default:
            return "ERROR"
    }
}

operate(1, "+", 1)
fillScreen()