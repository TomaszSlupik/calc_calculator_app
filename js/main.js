const textBtn = document.querySelector('.textBtn')
const inputCalculator = document.querySelector('.inputCalculator')
const number = document.querySelectorAll('p')
const addBtn = document.querySelector('.addBtn')
const subBtn = document.querySelector('.subBtn')
const divideBtn = document.querySelector('.divideBtn')
const multiBtn = document.querySelector('.multiBtn')
const btnEqual = document.querySelector('.btnEqual')
const clearAll = document.querySelectorAll('.clearAll')
const blockBtn = document.querySelectorAll('.blockBtn')
const cal = document.querySelector('.cal')
const calcResult = document.querySelector('.calcResult')
const resultcalc = document.querySelector('.resultcalc')
const btnBacktoCalc = document.querySelector('.btnBacktoCalc')

var tableNumber = []
var tableNumberAll = []
var tableWithTwoItem = []


function isValidNumber(e) {
    if (isNaN(parseInt(e.key, 10))) {
        e.preventDefault()
    } else {
        return true
    }
}

const clearInput = () => {
    inputCalculator.value = ''
    tableNumber = []
    console.log(tableNumber)
}

clearAll.forEach(el => el.addEventListener('click', () => {
    clearInput()

    blockBtn.forEach(el => {
        el.removeAttribute('disabled')
        console.log(el)
    })
}))

number.forEach(el => el.addEventListener('click', () => {
    numberClick = parseInt(el.textContent)
    tableNumber.push(numberClick)
    var x = Number(tableNumber.join(''))
    inputCalculator.value = x
    parseInt(x)
    tableNumberAll.push(x)
    console.log(x)

}))


var one = tableNumber[0]
var two = tableNumber[1]








const addText = () => {
    if (inputCalculator.value !== '') {
        var one = parseInt(inputCalculator.value)
        tableNumberAll.push(one)
    } else {
        console.log('Pusty input')
    }
    tableNumberAll.push('dodać')
    inputCalculator.value = ''
    tableWithTwoItem = tableNumberAll.slice(-2)
    console.log(tableWithTwoItem)

    blockBtn.forEach(el => {
        el.setAttribute('disabled', true)
        console.log(el)
    })

}

const substrText = () => {
    if (inputCalculator.value !== '') {
        var one = parseInt(inputCalculator.value)
        tableNumberAll.push(one)
    } else {
        console.log('Pusty input')
    }
    tableNumberAll.push('odjąć')
    inputCalculator.value = ''
    tableWithTwoItem = tableNumberAll.slice(-2)
    console.log(tableWithTwoItem)

    blockBtn.forEach(el => {
        el.setAttribute('disabled', true)
        console.log(el)
    })
}


const divideText = () => {
    if (inputCalculator.value !== '') {
        var one = parseInt(inputCalculator.value)
        tableNumberAll.push(one)
    } else {
        console.log('Pusty input')
    }
    tableNumberAll.push('podzielić')
    inputCalculator.value = ''
    tableWithTwoItem = tableNumberAll.slice(-2)
    console.log(tableWithTwoItem)

    blockBtn.forEach(el => {
        el.setAttribute('disabled', true)
        console.log(el)
    })
}

const multiText = () => {
    if (inputCalculator.value !== '') {
        var one = parseInt(inputCalculator.value)
        tableNumberAll.push(one)
    } else {
        console.log('Pusty input')
    }
    tableNumberAll.push('mnożyć')
    inputCalculator.value = ''
    tableWithTwoItem = tableNumberAll.slice(-2)
    console.log(tableWithTwoItem)

    blockBtn.forEach(el => {
        el.setAttribute('disabled', true)
        console.log(el)
    })
}


const allFunctionNumber = () => {
    if (tableWithTwoItem.includes('dodać')) {
        var inpuTwo = parseInt(inputCalculator.value)
        tableWithTwoItem.push(inpuTwo)
        tableWithTwoItem.sort()
        tableWithTwoItem.pop()
        Number(tableWithTwoItem)
        console.log(tableWithTwoItem)
        addtwoNumber()
    } else if (tableWithTwoItem.includes('odjąć')) {
        var inpuTwo = parseInt(inputCalculator.value)
        tableWithTwoItem.push(inpuTwo)
        tableWithTwoItem.splice(1, 1)
        Number(tableWithTwoItem)
        console.log(tableWithTwoItem)
        subtractiontwoNumber()
    } else if (tableWithTwoItem.includes('podzielić')) {
        var inpuTwo = parseInt(inputCalculator.value)
        tableWithTwoItem.push(inpuTwo)
        tableWithTwoItem.splice(1, 1)
        Number(tableWithTwoItem)
        console.log(tableWithTwoItem)
        dividetwoNumber()
    } else if (tableWithTwoItem.includes('mnożyć')) {
        var inpuTwo = parseInt(inputCalculator.value)
        tableWithTwoItem.push(inpuTwo)
        tableWithTwoItem.splice(1, 1)
        Number(tableWithTwoItem)
        console.log(tableWithTwoItem)
        multipletwoNumber()
    }
}

const addtwoNumber = () => {
    var sum = tableWithTwoItem.reduce(function (prev, curr) {
        return prev + curr;
    });

    inputCalculator.value = sum

    console.log(sum)
    resultAll()
}

const subtractiontwoNumber = () => {

    var sustr = tableWithTwoItem.reduce(function (prev, curr) {
        return prev + (-curr);
    });

    inputCalculator.value = sustr
    resultAll()


}


const dividetwoNumber = () => {
    var dividenumber = tableWithTwoItem.reduce(function (prev, curr) {
        return prev / curr;
    });

    inputCalculator.value = dividenumber.toFixed(2)
    console.log(dividenumber)
    resultAll()
}


const multipletwoNumber = () => {
    var multinumber = tableWithTwoItem.reduce(function (prev, curr) {
        return prev * curr;
    });

    inputCalculator.value = multinumber
    console.log(multinumber)
    resultAll()
}


const resultAll = () => {
    cal.style.display = 'none'
    calcResult.style.display = 'flex'
    resultcalc.innerText = inputCalculator.value

}

const backtoCalculator = () => {
    cal.style.display = 'block'
    calcResult.style.display = 'none'
    clearInput()
    blockBtn.forEach(el => {
        el.removeAttribute('disabled')
        console.log(el)
    })



}

inputCalculator.addEventListener('keydown', isValidNumber)
textBtn.addEventListener('click', clearInput)
btnEqual.addEventListener('click', allFunctionNumber)
addBtn.addEventListener('click', addText)
subBtn.addEventListener('click', substrText)
divideBtn.addEventListener('click', divideText)
multiBtn.addEventListener('click', multiText)
btnBacktoCalc.addEventListener('click', backtoCalculator)