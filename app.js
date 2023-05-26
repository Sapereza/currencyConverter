//This code is for the responsive headder
function Menu(e){
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :(e.name = "menu" ,list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

//Javascript function for the currency conversion. API will be used to
//fetch the latest exchange rates

function convertCurrency(){
    var amount =
    document.getElementById("amount").value;
    var fromCurrency =
    document.getElementById("fromCurrency").value;
    var toCurrency =
    document.getElementById("toCurrency").value;
    var resultElement =
    document.getElementById("result");

    fetch(`https://v6.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}&access_key=e33874d3def7adf526ac1de6b6d0d220`)
        .then(response => response.json())
        .then(data => {
            var rate = data.rates[toCurrency];
            var convertedAmount = amount * rate;
                resultElement.textContent = `${amount} 
                 ${fromCurrency} = $
                {convertedAmount.toFixed(2)} $
                {toCurrency}`;
        })
        .catch(error => {
            resultElement.textContent = "an error occurred durning the conversion.";
            console.log(error);

        });
        }

        //Function to switch currency
        function switchCurrencies() {
            var fromCurrency =
            document.getElementById("fromCurrency").value;
            var toCurrency = 
            document.getElementById("toCurrency").value;


            document.getElementById("fromCurrency").value = toCurrency;
            document.getElementById("toCurrency").value = fromCurrency
        }

        //buttons
        var convertBtn =
        document.getElementById("convertBtn");
        convertBtn.addEventListener("click", convertCurrency);

        var switchBtn =
        document.getElementById("switchBtn");
        switchBtn.addEventListener("click", switchCurrencies);