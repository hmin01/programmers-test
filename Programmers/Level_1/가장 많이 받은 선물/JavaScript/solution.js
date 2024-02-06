function solution(friends, gifts) {
  const info = {};
  const table = {};
  // 정보 객체 생성
  for (let i = 0; i < friends.length; i++) {
    info[friends[i]] = { receive: 0, send: 0, gift: 0 };
    for (let j = i + 1; j < friends.length; j++) {
      table[friends[i] + " " + friends[j]] = "0";
    }
  }
  // 선물을 주고받은 정보 처리
  for (const content of gifts) {
    const [sender, receiver] = content.split(" ");
    const reverse = receiver + " " + sender;

    info[sender].send++;
    info[receiver].receive++;

    if (table[content] !== undefined) {
      table[content]++;
    } else if (table[reverse] !== undefined) {
      table[reverse]--;
    }
  }
  // 로직에 따른 최대 수신 선물 수 파악
  let max = 0;
  for (const keys of Object.keys(table)) {
    let giftPoint = 0;
    const [sender, receiver] = keys.split(" ");

    if (table[keys] > 0) {
      info[sender].gift++;
      giftPoint = info[sender].gift;
    } else if (table[keys] < 0) {
      info[receiver].gift++;
      giftPoint = info[receiver].gift;
    } else {
      const senderPoint = info[sender].send - info[sender].receive;
      const receiverPoint = info[receiver].send - info[receiver].receive;

      if (senderPoint < receiverPoint) {
        info[receiver].gift++;
        giftPoint = info[receiver].gift;
      } else if (senderPoint > receiverPoint) {
        info[sender].gift++;
        giftPoint = info[sender].gift;
      }
    }
    if (max < giftPoint) max = giftPoint;
  }

  return max;
}
