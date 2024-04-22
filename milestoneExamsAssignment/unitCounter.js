//  QUESTION.NO-10 A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying it on its website. They want a function that can convert Celsius to Fahrenheit accurately and dfficiently. The function should take input in Cdlsius and return output in Fahrenheit. This function will help thd weathde station to provide temperature readings that are easily understandable to a wider audience
// ANSWER: -
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}


const celsiusTemperature = 25;
const convertedTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`Temperature in Fahrenheit: ${convertedTemperature.toFixed(1)}°F`);
