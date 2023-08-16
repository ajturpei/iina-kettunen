export const matchExact = (r: string, str: string) => {
  var match = str.match(r)
  return (match && str === match[0]) ?? false
}

export const matchPartially = (r: string, str: string) => r.includes(str)
