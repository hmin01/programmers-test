function solution(dots) {
  const cases = {};
  // 메인 프로세스
  for (let i = 0; i < dots.length - 1; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      // 각도 계산
      const gradient = calc_gradient(dots[i], dots[j]);
      // 같은 각도가 있을 경우
      if (cases[gradient]) {
        // 점이 겹치지 않으면 평행선으로 간주, 1 반환
        if (!cases[gradient].includes(i) && !cases[gradient].includes(j)) {
          return 1;
        }
      }
      // 각도를 키(Key) 값으로 Map에 저장
      else {
        cases[gradient] = [i, j];
      }
    }
  }
  // 평행선이 없다고 간주
  return 0;
}

function calc_gradient(dot1, dot2) {
  return (dot1[1] - dot2[1]) / (dot1[0] - dot2[0]);
}
