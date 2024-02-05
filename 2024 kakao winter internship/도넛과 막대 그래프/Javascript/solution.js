function solution(edges) {
  // 결과 반환을 위한 1차원 배열
  const answer = new Array(4).fill(0);

  const line = {};
  // 간선 정보 처리
  for (const [send, receive] of edges) {
    if (!line[send]) line[send] = { receive: 0, send: 0 };
    if (!line[receive]) line[receive] = { receive: 0, send: 0 };
    // 방향성 확인을 위한 수신, 발신 수 파악
    line[receive].receive++;
    line[send].send++;
  }
  // 간선 정보를 이용한 그래프 수 파악
  for (let edge in line) {
    // 정점
    if (line[edge].send >= 2 && line[edge].receive === 0) {
      answer[0] = Number(edge);
    }
    // 막대 그래프 수
    else if (line[edge].send === 0) {
      answer[2]++;
    }
    // 8자 그래프 수
    else if (line[edge].receive >= 2 && line[edge].send === 2) {
      answer[3]++;
    }
  }
  // 도넛 그래프 수 (정점으로부터 연결된 모든 그래프 수 - 막대 그래프 수 - 8자 그래프 수)
  answer[1] = line[answer[0]].send - answer[2] - answer[3];

  // 결과 반환
  return answer;
}
