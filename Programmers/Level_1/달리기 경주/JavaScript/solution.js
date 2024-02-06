function solution(players, callings) {
  // 순위 정보 객체
  const rankObj = players.reduce((res, player, idx) => {
    res[player] = idx;
    return res;
  }, {});

  // 메인 프로세스
  for (const player of callings) {
    // 이름을 불린 플레이어 순위
    const rank = rankObj[player];
    // 앞 선수
    const frontPlayer = players[rank - 1];

    // 순위 목록 수정
    players[rank - 1] = player;
    players[rank] = frontPlayer;

    // 순서 정보 객체 수정
    rankObj[player] -= 1;
    rankObj[frontPlayer] += 1;
  }

  // 결과 반환
  return players;
}
