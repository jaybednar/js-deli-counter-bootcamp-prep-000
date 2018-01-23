var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome to Katz Deli.  You are number ${katzDeliLine.length} in line.`
}