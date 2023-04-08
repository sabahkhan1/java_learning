// trim()
// toUpperCase()
// toLowerCase()
// slice()

let countryName = "    Pakistan    ";

console.log(countryName.length);
countryName = countryName.trim();
console.log(countryName);
console.log(countryName.length);

let brandName = "halal";
brandName = brandName.toUpperCase();
console.log(brandName);

let andName = "HALAl";
andName = andName.toLowerCase();
console.log(andName);


let app = "elephant";

let animalName = app.slice(4);
console.log(animalName);