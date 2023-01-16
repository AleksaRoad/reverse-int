module.exports = function reverse (n) {
  let rev = String(Math.abs(n)).split('').reverse().join('');
  
  return rev;
}
