
function capitalize(string) { 
let wyciete = string.slice(0, 1);
let pierwszaWielka = wyciete.toUpperCase();
let reszta = string.slice(1);
return pierwszaWielka+reszta;  
}
console.log(capitalize("jabko"));



