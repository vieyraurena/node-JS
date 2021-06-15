function doll(num) {
  const doolWeight = 112;
  return num * doolWeight;
}

function clown(num) {
  const jokerWeight = 75;
  return num * jokerWeight;
}

exports.CalculateWeight = function(amount) {
  let dolls = Number(amount[0]);
  let clowns = Number(amount[1]);
  console.log(doll(dolls) + clown(clowns));
  // console.log(clown(clowns));
}