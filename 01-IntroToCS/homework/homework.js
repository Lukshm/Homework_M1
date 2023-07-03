'use strict';

function BinarioADecimal(num) {

   let numDecim = 0; 
   for(let i = num.length -1; i>=0; i--){
      const digito = num[i];
      const power = num.length - 1 -i;
      numDecim += digito * Math.pow(2, power);
   }

   return numDecim;

}

function DecimalABinario(num) {

   let binario = "";
   while(num > 0){
      const resto = num%2;
      binario = resto + binario;
      num = Math.floor(num/2);

   }
      return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
