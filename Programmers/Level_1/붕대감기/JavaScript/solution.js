function solution1(bandage, health, attacks) {
  // 현재 체력
  let cur_health = health;
  // 최대 생존 시간
  const maximum_survival_time = attacks[attacks.length - 1][0];

  // 성공 횟수
  let success_cnt = 0;
  // 공격 패턴 카운트
  let attack_cnt = 0;

  for (let t = 0; t <= maximum_survival_time; t++) {
    // 공격 관련 로직
    if (t === attacks[attack_cnt][0]) {
      // 성공 횟수 초기화
      success_cnt = 0;
      // 체력 감소 적용
      cur_health -= attacks[attack_cnt][1];
      // 체력이 0이하일 경우, 게임 오버
      if (cur_health <= 0) return -1;
      // 공격 패턴 카운트 증가
      if (attack_cnt < attacks.length - 1) attack_cnt++;
    }
    // 회복 관련 로직
    else {
      // 성공 횟수 증가
      success_cnt++;
      // 성공 횟수에 따른 체력 회복
      if (t > 0 && success_cnt > 0) cur_health += bandage[1];
      // 추가 체력 회복
      if (success_cnt === bandage[0]) {
        success_cnt = 0;
        cur_health += bandage[2];
      }
      // 최대 체력보다 클 경우, 최대 체력에 맞춤
      if (cur_health > health) cur_health = health;
    }
    console.log(cur_health);
  }
  // 남은 체력 반환
  return cur_health;
}

// 솔루션 1 대비 10배 빠르게 처리
function solution2(bandage, health, attacks) {
  // 현재 체력
  let cur_time = 0;
  let cur_health = health;
  // 메인 프로세스
  for (const [attack_time, damage] of attacks) {
    const diff_time = attack_time - cur_time - 1;
    // 회복량
    cur_health +=
      diff_time * bandage[1] + Math.floor(diff_time / bandage[0]) * bandage[2];
    // 최대 체력 초과 여부에 따른 처리
    if (cur_health > health) cur_health = health;
    // 데미지 및 게임 오버 처리
    cur_health -= damage;
    if (cur_health <= 0) return -1;
    // 시간 재설정
    cur_time = attack_time;
  }
  // 남은 체력 반환
  return cur_health;
}
