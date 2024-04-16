window.onload = function() {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        const currencies = Object.keys(data.rates);
        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');
        
        currencies.forEach(currency => {
          const option1 = document.createElement('option');
          option1.text = currency;
          option1.value = currency;
          fromCurrencySelect.add(option1);
          
          const option2 = document.createElement('option');
          option2.text = currency;
          option2.value = currency;
          toCurrencySelect.add(option2);
        });
      });
  };
  
  function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[toCurrency];
        const result = amount * rate;
        document.getElementById('result').value = result.toFixed(2);
      });
  }
  