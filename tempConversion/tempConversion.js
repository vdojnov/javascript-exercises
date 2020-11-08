const ftoc = function(F) {
  let result = Math.round((F-32)*(5/9)*10)/10
  return result
}

const ctof = function(C) {
  let result = Math.round((C*(9/5)+32)*10)/10
  return result
}

module.exports = {
  ftoc,
  ctof
}
