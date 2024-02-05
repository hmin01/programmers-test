function solution(numbers) {
  return numbers.reduce((sum, elem) => sum + elem, 0) / numbers.length;
}
