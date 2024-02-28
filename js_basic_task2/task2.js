let year = 2020;
let mileage = 60000;
let hasClimateControl = true;
let hasSafetyPackage = true;
let isElectric = false;

let basePrice = 10000;
let finalPrice = basePrice;

if (year >= 2019 && year <= 2022) {
  finalPrice += basePrice * 0.10;
}

if (mileage >= 50000 && mileage <= 100000) {
  finalPrice -= basePrice * 0.05;
}

if (hasClimateControl) {
  finalPrice += basePrice * 0.07;
}

if (hasSafetyPackage) {
  finalPrice += basePrice * 0.08;
}

if (isElectric) {
  finalPrice += basePrice * 0.15;
}

console.log(`Базова ціна автомобіля: ${basePrice}, Фінальна ціна автомобіля: ${finalPrice}`);

//Base price was $10,000.
//Year range (2019-2022) added +$1,000.
//Mileage (50,000 to 100,000 km) reduced -$500. 
//HasClimateControl added +$700. 
//HasSafetyPackage added +$800. 
//Final price is higher due to these additions and one reduction.





