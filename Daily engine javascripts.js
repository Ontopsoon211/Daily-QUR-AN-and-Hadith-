export function getDailyIndex(arrayLength) {
  const today = new Date()
  const seed = today.getFullYear() * 1000 + today.getDate()
  return seed % arrayLength
}
