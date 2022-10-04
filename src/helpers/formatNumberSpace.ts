export default (value: number) => {
  return value
    .toString()
    .split('')
    .reverse()
    .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
    .reverse()
    .join('')
}
