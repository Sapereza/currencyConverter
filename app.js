//This code is for the responsive headder
function Menu(e){
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :(e.name = "menu" ,list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

//Javascript function for the currency conversion. API will be used to
//fetch the latest exchange rates

function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var resultElement = document.getElementById("result");
  
    if (isNaN(amount)) {
      resultElement.textContent = "Please enter a valid amount.";
      return;
    }
  
    fetch(`https://v6.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}&access_key=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          resultElement.textContent = "An error occurred during the conversion.";
        } else {
          var rate = data.rates[toCurrency];
          var convertedAmount = amount * rate;
          resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        }
      })
      .catch(error => {
        resultElement.textContent = "An error occurred during the conversion.";
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