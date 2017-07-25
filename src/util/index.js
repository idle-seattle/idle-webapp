export function programAddressToString(program) {
  return encodeURIComponent(program.address1 + ', ' + program.city + ', ' + program.state + ' ' + program.zip)
}

export function stringToClassName(str) {
  return str.toLowerCase().split(' ').join('-').toLowerCase()
}