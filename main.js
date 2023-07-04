const resultScreen = document.getElementById("resultScreen")
const keys = document.querySelectorAll("button")

const fillScreen = () => {
    let firstNumber = 0
    let operator = ""
    let secondNumber = 0
    let numbers = []
    keys.forEach((key) => {
        key.addEventListener("click", () => {
            if((key.textContent != "C") && (key.textContent != "=") && (key.textContent != "Del")) {
                if((key.textContent != "+") && (key.textContent != "-") && (key.textContent != "x") && (key.textContent != "/")) {
                    numbers.push(key.textContent)
                    resultScreen.textContent = numbers.join("")
                } else {
                    if(firstNumber == 0) {
                        firstNumber = parseFloat(numbers.join(""))
                        resultScreen.innerHTML = ""
                        numbers = []
                        operator = key.textContent
                    } else {
                        if(firstNumber != 0) {
                            secondNumber = parseFloat(numbers.join(""))
                            numbers = []
                        }
                        let operation = Number(operate(firstNumber, operator, secondNumber).toFixed(2))
                        firstNumber = operation
                        operator = key.textContent
                        secondNumber = 0
                        resultScreen.innerHTML = ""
                        numbers = []
                        resultScreen.textContent = firstNumber
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
                    secondNumber = parseFloat(numbers.join(""))
                    numbers = []
                }
                resultScreen.innerHTML = ""
                let operation = Number(operate(firstNumber, operator, secondNumber).toFixed(2))
                resultScreen.textContent = operation
                firstNumber = operation
                operator = ""
                secondNumber = 0                
            } else if(key.textContent == "Del") {
                numbers.pop()
                resultScreen.textContent = numbers.join("")
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