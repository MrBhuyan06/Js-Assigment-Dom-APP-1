const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
console.log(lowercaseEl);
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
const resultContainer = document.getElementsByClassName('result-container')
console.log(resultContainer);

// const errormsg=document.getElementById("error-msg");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {

    resultEl.style.background="#0087ff5c";
    navigator.clipboard.writeText(resultEl.textContent);
});

generateEl.addEventListener('click', () => {
   
    resultEl.style.background="none";
    if(lengthEl.value < 5)
    {
        let para=document.createElement("p");
        para.innerHTML=` <p > Length Can not be less Than 5  </p>
        `
        para.className="error-msg";
        // console.log(resultContainer.firstElementChild)
        resultContainer[0].innerHTML=para.innerText
        // console.log("hello");

    }
    let lower=lowercaseEl.checked;
    let upper=uppercaseEl.checked;
    let number=numbersEl.checkedl;
    let symbol=symbolsEl.checked;
    let length=lengthEl.value;

    generatePassword(lower, upper, number, symbol, length);
    
});

function generatePassword(lower, upper, number, symbol, length) {
    let pas="";
    while(pas.length <= length)
    {
        lower?(pas=pas+randomFunc.lower()):"";
        upper?(pas=pas+randomFunc.upper()):"";
        number?(pas=pas+randomFunc.number()):"";
        symbol?(pas=pas+randomFunc.symbol()):"";

    }
    resultEl.textContent=pas
}

function getRandomLower() {

    const lower="abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random()*lower.length)];
}

function getRandomUpper() {
    const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upper[Math.floor(Math.random()*upper.length)];
}

function getRandomNumber() {
    const number="0123456789";
    return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
    const symbol="!@#$%^&*"
    return symbol[Math.floor(Math.random() * symbol.length)];
}