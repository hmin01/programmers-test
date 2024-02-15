function solution(wallpaper) {
  // 바탕화면 크기
  const width = wallpaper[0].length;
  const height = wallpaper.length;
  // 시작점, 끝점
  const start = [height, width];
  const end = [0, 0];
  // 메인 프로세스
  for (let i = 0; i < height; i++) {
    // "#" 매칭 인덱스 추출
    const minIndex = wallpaper[i].indexOf("#");
    const maxIndex = wallpaper[i].lastIndexOf("#");
    // X 최소, 최대값
    if (minIndex !== -1 && minIndex < start[1]) start[1] = minIndex;
    if (maxIndex !== -1 && maxIndex > end[1]) end[1] = maxIndex;
    // Y 최소, 최대값
    if (minIndex !== -1 || maxIndex !== -1) {
      if (i < start[0]) start[0] = i;
      if (i >= end[0]) {
        end[0] = i;
      }
    }
  }
  // 결과 반환
  return start.concat(end.map((elem) => elem + 1));
}
