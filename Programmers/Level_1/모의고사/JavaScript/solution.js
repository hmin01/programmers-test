function solution(answers) {
  const users = new Array(3).fill(0);
  // 사용자별 정답 패턴
  const u1_answers = [1, 2, 3, 4, 5];
  const u2_answers = [2, 1, 2, 3, 2, 4, 2, 5];
  const u3_answers = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  // 점수 계산
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    // User 1
    if (u1_answers[i % u1_answers.length] === answer) users[0] += 1;
    // User 2
    if (u2_answers[i % u2_answers.length] === answer) users[1] += 1;
    // User 3
    if (u3_answers[i % u3_answers.length] === answer) users[2] += 1;
  }
  // 최대 점수
  let max = users[0];
  for (let i = 1; i < users.length; i++) {
    if (max < users[i]) max = users[i];
  }
  // 최대 점수자 추출
  return users.reduce((arr, score, index) => {
    if (score === max) arr.push(index + 1);
    return arr;
  }, []);
}
