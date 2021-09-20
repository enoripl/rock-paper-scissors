
function capitalize(string) { 
let takeFirst = string.slice(0, 1);
let upperFirst = takeFirst.toUpperCase();
let rest = string.slice(1);
return upperFirst+rest;  
}

console.log(capitalize("bread"));



