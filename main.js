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
                asd.push(key.textContent)
                //SEGUIR TRABAJANDO SOBRE ESTO DE ABAJO
                if((key.textContent == "+") && (key.textContent == "-") && (key.textContent == "x") && (key.textContent == "/")) {
                    let asd2 = asd.pop()
                    firstNumber = parseInt(asd2.join(""))
                    console.log(firstNumber)
                    resultScreen.textContent = firstNumber
                }
            } else if(key.textContent == "C") {
                resultScreen.innerHTML = ""
                asd = []
            } else if(key.textContent == "=") {
                resultScreen.innerHTML = ""
            }
        })
    })
}

const sum = (a, b) => {
    return console.log(a + b)
}

const minus = (a, b) => {
    return console.log(a - b)
}

const multiply = (a, b) => {
    return console.log(a * b)
}

const divide = (a, b) => {
    return console.log(a / b)
}

const operate = (firstNumber, operator, secondNumber) => {
    switch(operator) {
        case "+":
            sum(firstNumber, secondNumber)
            break
        case "-":
            minus(firstNumber, secondNumber)
            break
        case "*":
            multiply(firstNumber, secondNumber)
            break
        case "/":
            divide(firstNumber, secondNumber)
            break
        default:
            return console.log("ERROR")
    }
}

fillScreen()