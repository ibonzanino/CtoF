const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira o valor a ser convertido seguido do grau.(Ex: 101f ou 34.5c) ", (answer) => {
  function transformDegrees(degree) {
    const CelsiusExists = degree.toUpperCase().includes('C');
    const FahrenheitExists = degree.toUpperCase().includes('F');
  
    if (!CelsiusExists && !FahrenheitExists) {
      throw new Error('Grau não identificado')
    }
  
    let updatedDegree = Number(degree.slice(0, degree.length - 1));
    if (FahrenheitExists){
      let toCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
      return toCelsius(updatedDegree).toFixed(2) + 'C';
    }
  
    if (CelsiusExists){
      let toFahrenheit = (celsius) => celsius * 9/5 + 32;
      return toFahrenheit(updatedDegree).toFixed(1) + 'F';
    }
  }
  
  try {
    console.log(transformDegrees(answer));
  } catch (error) {
    console.log(error.message)
  }
  rl.close();
});