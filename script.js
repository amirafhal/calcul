        var plus = document.querySelector('#plus')
        var minus = document.querySelector('#minus')
        var multip = document.querySelector('#multip')
        var division = document.querySelector('#division')
        var num = document.querySelector("#num")
        var equal = document.querySelector('#equal')
        var result = document.querySelector("#resultat")
        var numdot = 0
        for (const child of num.children) {

            child.addEventListener("click", clicked)
        }

        function clicked(e) {
            var number = e.target.innerText
            if (number == "AC") {
                result.innerText = 0
                numdot = 0
            } else if (number == "." && result.innerText == 0 && numdot == 0) {
                result.innerText = "0."
                numdot += 1
            } else if (number == "." && numdot == 0) {
                result.innerText += number
                numdot += 1
            } else if (number == "." && numdot > 0) {
                return
            } else if (result.innerText == "0") {
                result.innerText = number
            } else {
                result.innerText += number
            }
        }

        function split(s) {
            let num1 = ""
            let num2 = ""
            let op = ""
            for (let i = 0; i < s.length; i++) {
                if (isNaN(s[i])) {
                    op = s[i]

                } else {
                    if (op == "") {
                        num1 += s[i]
                    } else {
                        num2 += s[i]
                    }
                }
            }
            return calculate(num1, num2, op)
        }
        plus.addEventListener("click", function() {
            if (result.innerText[result.innerText.length - 1] != "+" &&
                result.innerText[result.innerText.length - 1] != "-" &&
                result.innerText[result.innerText.length - 1] != "*" && result.innerText[result.innerText.length - 1] != "/") {
                let ops = ['+', '-', '*', '/'];
                let v = ops.some(el => result.innerText.includes(el));
                if (v == true) {
                    result.innerText = split(result.innerText)
                }
                result.innerText += "+"

            }
        })
        minus.addEventListener("click", function() {

            if (result.innerText[result.innerText.length - 1] != "+" &&
                result.innerText[result.innerText.length - 1] != "-" &&
                result.innerText[result.innerText.length - 1] != "*" && result.innerText[result.innerText.length - 1] != "/") {
                let ops = ['+', '-', '*', '/'];
                let v = ops.some(el => result.innerText.includes(el));
                if (v == true) {
                    result.innerText = split(result.innerText)
                }
                result.innerText += "-"
            }
        })
        multip.addEventListener("click", function() {
            if (result.innerText[result.innerText.length - 1] != "+" &&
                result.innerText[result.innerText.length - 1] != "-" &&
                result.innerText[result.innerText.length - 1] != "*" && result.innerText[result.innerText.length - 1] != "/") {
                let ops = ['+', '-', '*', '/'];
                let v = ops.some(el => result.innerText.includes(el));
                if (v == true) {
                    result.innerText = split(result.innerText)
                }
                result.innerText += "*"
            }
        })
        division.addEventListener("click", function() {
            if (result.innerText[result.innerText.length - 1] != "+" &&
                result.innerText[result.innerText.length - 1] != "-" &&
                result.innerText[result.innerText.length - 1] != "*" && result.innerText[result.innerText.length - 1] != "/") {
                let ops = ['+', '-', '*', '/'];
                let v = ops.some(el => result.innerText.includes(el));
                if (v == true) {
                    result.innerText = split(result.innerText)
                }
                result.innerText += "/"
            }
        })

        function calculate(num1, num2, op) {
            num1 = parseFloat(num1)
            num2 = parseFloat(num2)
            switch (op) {
                case '+':
                    return num1 + num2
                case '-':
                    return num1 - num2
                case '*':
                    return num1 * num2
                case '/':
                    return num1 / num2
                default:
                    return 0
            }

        }
        equal.addEventListener('click', function() {
            var res = 0
            let op = ""
            var curr = ""
            for (let j = 0; j < result.innerText.length; j++) {
                if (j == result.innerText.length - 1) {
                    curr += result.innerText[j]
                    curr = parseFloat(curr)
                    console.log("op  res curr ", op, res, curr)
                    res = calculate(res, curr, op)
                    result.innerText = res
                } else if (result.innerText[j] != "+" && result.innerText[j] != "-" && result.innerText[j] != "*" && result.innerText[j] != "/") {
                    curr += result.innerText[j]
                } else {
                    if (res == 0) {
                        res = parseFloat(curr)
                        curr = ""
                        op = result.innerText[j]
                    } else {
                        console.log("res:", res, "curr ", curr, "op ", op)
                        op = result.innerText[j]
                        res = calculate(res, curr, op)
                        curr = ""
                    }
                }
            }
            console.log(res, curr)


        })