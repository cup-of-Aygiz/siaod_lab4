import Stack from "../Classes/Stack.js";

const typeOfTerm = (term) => {
    if (term.length === 2) {
        return {
            type: "term",
            value: term
        }
    }
    return {
        type: "compute",
        value: "+" + term
    }
}

export const computeLogic = (object) => {

    let currentBooleanValue = 0
    let termsStack = new Stack()

    if (object.type === "compute") {
        let stringStack = new Stack()
        let logicalExpressions = object.value.match(/[+*][FT]|(?<=\().*(?=\))/gm)

        console.log(logicalExpressions)
        logicalExpressions.map(term => {
            stringStack.pushFront(term)
        })
        while (!stringStack.isEmpty()) {
            if (typeOfTerm(stringStack.peekFront()).type === "term") {
                termsStack.pushFront(typeOfTerm(stringStack.popFront()))
            } else {
                termsStack.pushFront(computeLogic(typeOfTerm(stringStack.popFront())))
            }
        }
    }
    let reverseStack = termsStack
    while (!reverseStack.isEmpty()) {
        let currentAction = reverseStack.popFront()
        if (currentAction.value === "+T") {
            currentBooleanValue = 1
        }
        if (currentAction.value === '*F') {
            currentBooleanValue = 0
        }
    }
    let term = currentBooleanValue ? "+T" : "+F"
    console.log(!!currentBooleanValue ? "+T" : "+F")
    return {
        type: "term",
        value: term
    }
}


export const computeLogic1 = (Str) => {
    let str1 = ""
    let stk = new Stack()
    for (let i = 0; i < Str.length; i++) {
        stk.pushFront(Str[i])
    }
    for (let i = 0; i < Str.length; i++) {
        if (stk.peekFront() === "T")
            str1 = "true " + str1
        if (stk.peekFront() === "F")
            str1 = "false " + str1
        if (stk.peekFront() === "N")
            str1 = "! " + str1
        if (stk.peekFront() === "A" || stk.peekFront() === "*")
            str1 = "&& " + str1
        if (stk.peekFront() === "X")
            str1 = "!= " + str1
        if (stk.peekFront() === "O" || stk.peekFront() === "+")
            str1 = "|| " + str1
        if (stk.peekFront() === "(")
            str1 = "( " + str1
        if (stk.peekFront() === ")")
            str1 = ")" + str1
        stk.popFront()
    }
    console.log(eval(str1))
}


export const computeMinMax = (Str) => {
    let str1 = ""
    let stk = new Stack()
    for (let i = 0; i < Str.length; i++) {
        stk.pushFront(Str[i])
    }
    for (let i = 0; i < Str.length; i++) {
        if (stk.peekFront() === "0")
            str1 = "0" + str1
        if (stk.peekFront() === "1")
            str1 = "1" + str1
        if (stk.peekFront() === "2")
            str1 = "2" + str1
        if (stk.peekFront() === "3")
            str1 = "3" + str1
        if (stk.peekFront() === "4")
            str1 = "4" + str1
        if (stk.peekFront() === "5")
            str1 = "5" + str1
        if (stk.peekFront() === "6")
            str1 = "6" + str1
        if (stk.peekFront() === "7")
            str1 = "7" + str1
        if (stk.peekFront() === "8")
            str1 = "8" + str1
        if (stk.peekFront() === "9")
            str1 = "9" + str1
        if (stk.peekFront() === "M")
            str1 = "Math.max" + str1
        if (stk.peekFront() === "N")
            str1 = "Math.min" + str1
        if (stk.peekFront() === "," || stk.peekFront() === ".")
            str1 = "," + str1
        if (stk.peekFront() === "(")
            str1 = "(" + str1
        if (stk.peekFront() === ")")
            str1 = ")" + str1
        stk.popFront()
    }
    console.log(eval(str1))
}


export const computeForm = (Str) => {
    let x = 1, y = 1, z = 1
    let stk = new Stack()
    let str = ""
    for (let i = 0; i < Str.length; i++) {
        stk.pushFront(Str[i])
    }
    for (let i = 0; i < Str.length; i++) {
        str = stk.popFront() + str
    }
    try {
        eval(str)
    } catch (err) {
        console.log(false)
    }
    console.log(true)
}