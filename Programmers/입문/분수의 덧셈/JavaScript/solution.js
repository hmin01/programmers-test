function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;
  // 최대 공약수 계산
  const gcd = calc_gcd(numer, denom);
  // 결과 반환
  return [numer / gcd, denom / gcd];
}

/**
 * 최대공약수 계산 함수
 * @param int num1
 * @param int num2
 */
function calc_gcd(num1, num2) {
  return num2 > 0 ? calc_gcd(num2, num1 % num2) : num1;
}
