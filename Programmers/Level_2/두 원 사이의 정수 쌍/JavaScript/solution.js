function solution(r1, r2) {
  let sumDot = 0;
  for (let x = 1; x <= r2; x++) {
    const width = x ** 2;
    // 최대 Y 값
    const maxY = Math.sqrt(r2 ** 2 - width);
    // 최소 Y 값
    let minY = 0;
    if (x < r1) {
      minY = Math.sqrt(r1 ** 2 - width);
    }
    // 최대 Y 값과 최소 Y 값 사이 정수의 개수
    sumDot += Math.floor(maxY) - Math.ceil(minY) + 1;
  }
  // 전체 점의 수 반환 (1사분면 * 4 + 축 위에 있는 점의 수)
  return sumDot * 4;
}
