function solution(sizes) {
  let max_width = 0,
    max_height = 0;
  // Process
  for (let i = 0; i < sizes.length; i++) {
    // 최대값으로 가로 설정
    const width = Math.max(...sizes[i]);
    // 최소 값으로 세로 설정
    const height = Math.min(...sizes[i]);
    // 최대 값 확인 및 저장
    if (max_width < width) max_width = width;
    if (max_height < height) max_height = height;
  }
  // 결과 반환
  return max_width * max_height;
}
