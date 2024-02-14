function solution(today, terms, privacies) {
  // 오늘 날짜 값
  const [tYear, tMonth, tDay] = today.split(".").map(Number);
  // 약관 정보
  const termsInfo = terms.reduce((res, cur) => {
    const [terms, months] = cur.split(" ");
    res[terms] = Number(months);
    return res;
  }, {});

  const answer = [];
  // 메인 프로세스
  for (let i = 0; i < privacies.length; i++) {
    const [date, terms] = privacies[i].split(" ");

    // 날짜 값
    const [year, month, day] = date.split(".").map(Number);
    // 날짜 값 차이
    const diff = (tYear - year) * 12 + (tMonth - month);

    // 차이에 따른 로직
    if (diff > termsInfo[terms] || (diff === termsInfo[terms] && tDay >= day)) {
      answer.push(i + 1);
    }
  }

  // 결과 반환
  return answer;
}
