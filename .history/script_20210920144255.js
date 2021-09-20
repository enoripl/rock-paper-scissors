
function capitalize(string) { 
let wyciete = string.slice(0, 1);
let text = wyciete.toUpperCase();
let reszta = string.slice(2);
return text+reszta;  
}
capitalize("jabko");
console.log(capitalize("jabko"));



