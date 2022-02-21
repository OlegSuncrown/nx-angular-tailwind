export function generateRandomNum(max = 0, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
