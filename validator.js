const validator = {
  isValid : function (number){
    const workNumber = [...number]
    const numberReverseAndMultiplied = workNumber.reverse().map((evaluateNumber, i) => {
      if (i % 2 !==0){
        evaluateNumber = evaluateNumber * 2
        if (evaluateNumber>=10){
          return evaluateNumber - 9
        }
        return evaluateNumber
      }
      return evaluateNumber * 1
    })

    const initialValue = 0
    const sumCardNumbers = numberReverseAndMultiplied.reduce((acum,currentValue) => {
      return acum + currentValue
    }, initialValue)

    if(sumCardNumbers % 10 ===0){
      return true
    } else{
      return false
    }
  },

  maskify : function (numberOriginal){
    const numberMaskify = numberOriginal.fill("x",0,-4)
    return numberMaskify
  }

};

export default validator;
