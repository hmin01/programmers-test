function solution(begin, target, words) {
  const visited = new Set();
  const queue = [[begin, 0]];
  // 메인 프로세스
  while (queue.length !== 0) {
    const [word, count] = queue.shift();
    // Escape
    if (word === target) return count;
    // Process
    for (let i = 0; i < words.length; i++) {
      if (!visited.has(words[i]) && isAvailableChange(word, words[i])) {
        visited.add(words[i]);
        queue.push([words[i], count + 1]);
      }
    }
  }
  // 변환할 수 없을 경우
  return 0;
}

function isAvailableChange(word1, word2) {
  let unmatched = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) unmatched += 1;
    if (unmatched > 1) return false;
  }
  return true;
}
