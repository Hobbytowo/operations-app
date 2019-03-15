export default function fillArray (string, colNr) {
  const arrToFill = Array.from(string.split('')).reverse()
  const arr = new Array(colNr).fill().map((nr, idx) => {
    return arrToFill[idx]
  })
  return arr.reverse()
}
