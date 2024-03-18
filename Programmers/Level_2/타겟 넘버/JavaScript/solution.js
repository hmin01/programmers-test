function solution(numbers, target) {
  let answer = 0;
  // DFS
  function calculate(sum, index) {
    if (index === numbers.length) {
      if (target === sum) answer += 1;
    } else {
      const current_num = numbers[index];
      calculate(sum - current_num, index + 1);
      calculate(sum + current_num, index + 1);
    }
  }
  // Process
  calculate(0, 0);
  // Return
  return answer;
}
