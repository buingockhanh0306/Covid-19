export function numberWithCommas(x: number): string {
  let n: string = x.toString()
  const pattern = /(-?\d+)(\d{3})/
  while (pattern.test(n)) n = n.replace(pattern, '$1.$2')
  return n
}