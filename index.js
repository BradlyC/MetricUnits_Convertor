let convertBtn = document.getElementById("convert-btn")
let metersFeets = document.getElementById("output1")
let litersGallon = document.getElementById("output2")
let kilosPounds = document.getElementById("output3")
let userInput = document.getElementById("User-Input")


convertBtn.addEventListener("click", function(){

  let inputValue = Number(userInput.value)
dataProcessing(inputValue)
console.log(inputValue)
userInput.value = ""

})


function dataProcessing(value){


const meters2Feets = 3.281
const liter2Gallon = 0.264
const kilogram2Pound = 2.204


const metersOps = value*meters2Feets
const feetsOps = value/meters2Feets

const litersOps = value*liter2Gallon
const gallonsOps = value/liter2Gallon

const kilosOps = value*kilogram2Pound
const poundOps = value/kilogram2Pound


      metersFeets.textContent = `${value} meters = ${metersOps.toFixed(3)} feet | ${value} feet =  ${feetsOps.toFixed(3)}meters`
       litersGallon.textContent = `${value} liters =  ${litersOps.toFixed(3)} gallons | ${value} gallons =  ${gallonsOps.toFixed(3)} liters`
         kilosPounds.textContent = `${value} Kilos = ${kilosOps.toFixed(3)}  pounds | ${value} pounds = ${poundOps.toFixed(3)} kilos`

}