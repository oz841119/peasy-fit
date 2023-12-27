export default function isEmptyOrNumber(value: any) {
  if (value === null || value === undefined || typeof value === 'boolean') {
    return false
  }
  return !isNaN(value)
}
