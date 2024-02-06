func solution(numer1 int, denom1 int, numer2 int, denom2 int) []int {
	numer := numer1 * denom2 + numer2 * denom1
	denom := denom1 * denom2
	// 최대공약수
	gcd := calc_gcd(numer, denom)
	// 결과 반환
	return []int{numer / gcd, denom / gcd}
}

/**
* 최대공약수 계산 함수 (유클리드 호제법 활용)
*/
func calc_gcd(num1 int, num2 int) int {
	if num2 > 0 {
			return calc_gcd(num2, num1 % num2)
	} else {
			return num1
	}
}