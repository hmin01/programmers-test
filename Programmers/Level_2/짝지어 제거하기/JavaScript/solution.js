function solution(s) {
  // 스택 생성
  const stack = [];
  // Process
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  // 결과 반환
  return stack.length === 0 ? 1 : 0;
}
