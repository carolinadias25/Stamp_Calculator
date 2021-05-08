// Calculate the stamp duty due based on house price

function calcStampDuty(price) {
    var variablePortion = 0;
    var sdlt = 0;
    var taxableAmount = 0;

      if (price <= 0) {
         return "price has to be a positive number"
      }
      if (typeof price !== 'number') {
        return "price has to be a number"
      }

      if (price <= 125000) {
        // Below £125,000.01, there's no Stamp Duty to pay on residential properties in the UK 
        return 0;   
      }
      if (price >= 125001 && price <= 250000) {
        // Between £125,001 and £250,000, 2% is payable on the amount above £125,000
        // but below £250,000
        taxableAmount = price - 125000;
        sdlt = taxableAmount * 0.02;
        return Math.floor(sdlt);
      }
      if (price >= 250001 && price <= 925000) {
        // Between £250,001 and £925,000, 5% is payable on the amount above £250,000
        variablePortion = price - 250000;
        sdlt = variablePortion * 0.05 + 2500;
        return Math.floor(sdlt);
      }
      if (price >= 925001 && price <= 1500000) {
        // Between £925,001 and £1,500,000, 10% is payable on the amount above £925,000
        variablePortion = price - 925000;
        sdlt = variablePortion * 0.1 + 36250;
        return Math.floor(sdlt);
      }
      if (price > 1500000) {
        // Over £1.5m, 12% is payable for that portion
        variablePortion = price - 1500000;
        sdlt = variablePortion * 0.12 + 93750;
        return Math.floor(sdlt);
      }
    }
    
module.exports = calcStampDuty;