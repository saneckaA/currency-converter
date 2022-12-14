const calculateResult = (amount, currencyPair) => {

    const ratePLNUSD = 0.22;
    const ratePLNNZD = 0.35;
    const ratePLNWON = 292.31;
    const ratePLNEUR = 0.21;
    const rateUSDPLN = 4.43;
    const rateUSDNZD = 1.56;
    const rateUSDWON = 1294.98;
    const rateUSDEUR = 0.94;
    const rateWONPLN = 0.0034;
    const rateWONUSD = 0.00077;
    const rateWONNZD = 0.0012;
    const rateWONEUR = 0.00073;
    const rateEURPLN = 4.69;
    const rateEURUSD = 1.06;
    const rateEURNZD = 1.65;
    const rateEURWON = 1371.55;
    const ratedefault = 1;

    switch (currencyPair) {
        case "PLN/USD":
            return amount / ratePLNUSD;

        case "PLN/NZD":
            return amount / ratePLNNZD;

        case "PLN/WON":
            return amount / ratePLNWON;

        case "PLN/EUR":
            return amount / ratePLNEUR;

        case "USD/PLN":
            return amount / rateUSDPLN;

        case "USD/NZD":
            return amount / rateUSDNZD;

        case "USD/WON":
            return amount / rateUSDWON;

        case "USD/EUR":
            return amount / rateUSDEUR;

        case "WON/PLN":
            return amount / rateWONPLN;

        case "WON/USD":
            return amount / rateWONUSD;

        case "WON/NZD":
            return amount / rateWONNZD;

        case "WON/EUR":
            return amount / rateWONEUR;

        case "EUR/PLN":
            return amount / rateEURPLN;

        case "EUR/USD":
            return amount / rateEURUSD;

        case "EUR/NZD":
            return amount / rateEURNZD;

        case "EUR/WON":
            return amount / rateEURWON;

        default:
            return amount / ratedefault;

    }

};

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const resultContainerElement = document.querySelector(".js-resultContainer");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");
        const currencyPair = `${inputCurrencyElement.value}/${outputCurrencyElement.value}`;
        const resultElement = document.querySelector(".js-result");
        const amount = amountElement.value;

        const result = calculateResult(amount, currencyPair)

        if (resultContainerElement.classList.contains("form__resultContainer")) {
            resultContainerElement.classList.remove("form__resultContainer");
        }

        resultElement.innerText = `${amountElement.value} ${inputCurrencyElement.value} = ${result.toFixed(2)} ${outputCurrencyElement.value}`;

    });
};

init();





