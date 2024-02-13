function solution(name, yearning, photo) {
  // 인물별 그리움 점수
  const point = name.reduce((res, cur, idx) => {
    res[cur] = yearning[idx];
    // 반환
    return res;
  }, {});
  // 그리움 점수 계산 및 반환
  return photo.map((members, idx) =>
    members.reduce((res, cur) => res + (point[cur] ?? 0), 0)
  );
}
