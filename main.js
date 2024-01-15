var currencyForm = document.querySelector(".currencyConverter");
currencyForm.onsubmit = function (e) {
  e.preventDefault();
  var elements = e.target.elements;

  var amount = elements[0].value;
  var exchange = elements[1].value;

  // console.log(amount);
  // console.log(exchange);

  //انا بحثت كيف اني اعرف انه مش نص لقيت ال is not a number
  if (isNaN(amount)) {
    alert("Please enter a valid numeric amount ");
    document.querySelector(".result").innerHTML = `Pls Try Again`;
  } else {
    var convertedCurrency = 0;

    if (exchange == "dollar") convertedCurrency = amount / 4;
    else if (exchange == "dinar") convertedCurrency = amount / 5;
    else if (exchange == "nis") convertedCurrency = amount;

    document.querySelector(
      ".result"
    ).innerHTML = `The value in NIS is : ${convertedCurrency}`;
  }
};
