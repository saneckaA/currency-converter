let amountElement = document.querySelector(".js-amount");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currencyPair = `${inputCurrencyElement.value}/${outputCurrencyElement.value}`; 
    let rate;

    switch (currencyPair) {
        case "PLN/USD":
            rate = 0.22;
            break;
        case "PLN/NZD":
            rate = 0.35;
            break;
        case "PLN/WON":
            rate = 292.31;
            break;
        case "PLN/EUR":
            rate = 0.21;
            break;
        case "USD/PLN":
            rate = 4.43;
            break;
        case "USD/NZD":
            rate = 1.56;
            break;
        case "USD/WON":
            rate = 1294.98;
            break;
        case "USD/EUR":
            rate = 0.94;
            break;
        case "WON/PLN":
            rate = 0.0034;
            break;
        case "WON/USD":
            rate = 0.00077;
            break;
        case "WON/NZD":
            rate = 0.0012;
            break;
        case "WON/EUR":
            rate = 0.00073;
            break;
        case "EUR/PLN":
            rate = 4.69;
            break;
        case "EUR/USD":
            rate = 1.06;
            break;
        case "EUR/NZD":
            rate = 1.65;
            break;
        case "EUR/WON":
            rate = 1371.55;
            break;
        default:
            rate=1;
    }

let amount = amountElement.value;
let result = amount * rate;

resultElement.innerText = `${amountElement.value} ${inputCurrencyElement.value} = ${result.toFixed(2)} ${outputCurrencyElement.value}`;
   

});

let resultContainerElement = document.querySelector(".js-resultContainer");
let form__buttonElement = document.querySelector(".js-form__button");

form__buttonElement.addEventListener ("click", () => {
    if(resultContainerElement.classList.contains("form__resultContainer")){
        resultContainerElement.classList.remove("form__resultContainer");} 

});


