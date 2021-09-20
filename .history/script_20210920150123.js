function capitalize(string) {
  let toLower = string.toLowerCase();  
  let first = toLower.slice(0, 1).toUpperCase();
  let rest = toLower.slice(1);
  return first + rest;
}

console.log(capitalize("BREAD"));

function lastLetter(string2) {
    let takeLast = string2.slice(-1)
    return takeLast;
}

console.log(lastLetter("breadcrumbs"))