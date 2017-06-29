export function programAddressToString(program) {
  return encodeURIComponent(program.address1 + ', ' + program.city + ', ' + program.state + ' ' + program.zip)
}
