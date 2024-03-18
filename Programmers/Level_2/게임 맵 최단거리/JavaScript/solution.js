function solution(maps) {
  // 맵 크기
  const height = maps.length - 1;
  const width = maps[0].length - 1;
  // 로직에 필요한 변수
  const d = [1, -1, 0, 0];
  const queue = [[0, 0, 1]];
  const visited = {};
  // Process
  while (queue.length !== 0) {
    const elem = queue.shift();
    for (let i = 0; i < d.length; i++) {
      const nx = elem[0] + d[i];
      const ny = elem[1] + d[3 - i];
      const key = `${nx},${ny}`;
      // 예외 처리
      if (nx < 0 || nx > width || ny < 0 || ny > height) continue;
      // 갈 수 있는 경로가 있을 경우
      if (maps[ny][nx] === 1 && !visited[key]) {
        const path = elem[2] + 1;
        // 목적지 여부 확인
        if (nx === width && ny === height) {
          return path;
        } else {
          queue.push([nx, ny, path]);
          visited[key] = true;
        }
      }
    }
  }
  // 목적지로 가는 경로가 없을 경우
  return -1;
}
