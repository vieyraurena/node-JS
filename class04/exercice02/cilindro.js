function radio(num) {
  const r = Number(num / 2); 
  return r
}

exports.Volumen = function(numbers) {
  let dia = Number(numbers[0]);
  let alt = Number(numbers[1]);
  return Number(Math.PI* (Math.pow(radio(dia),2)) * alt);
}