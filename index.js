import validator from './validator.js';

const creditCardNumber = document.getElementById("creditNumber");
const validateButton = document.getElementById("cardButton")
const resultvalidation = document.getElementById("resultMessage")

validateButton.addEventListener("click", () => {
  if(creditCardNumber.value === ""){
    resultvalidation.innerHTML = "Debes ingresar el número de tu tarjeta"
  } else{
    const creditCardNumberArray = creditCardNumber.value.split ("");
    const cardValidating = validator.isValid(creditCardNumberArray)
    const numberMaskify = validator.maskify(creditCardNumberArray)
  

    if(cardValidating){
      resultvalidation.innerHTML = "Su tarjeta n° " + numberMaskify + " es válida, puedes continuar con tu compra"
    }else{
      resultvalidation.innerHTML = "Su tarjeta n° " + numberMaskify + " es inválida. Intenta con otra tarjeta o cambia el método de pago"
    }
  }
    
     

  creditCardNumber.value = ""

}

)


