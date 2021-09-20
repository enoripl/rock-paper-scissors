function capitalize(string) {
  let toLower = string.slice(1).toLowerCase();  
  let first = string.slice(0, 1).toUpperCase();
  return first + toLower;
}

console.log(capitalize("BREAD"));

function lastLetter(string2) {
    let takeLast = string2.slice(-1)
    return takeLast;
}

console.log(lastLetter("breadcrumbs"))

