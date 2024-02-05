func solution(numbers []int) float64 {
	sum := 0
	// 합 계산
	for _, elem := range numbers {
		sum += elem
	}
	// 평균값 반환
	return float64(sum) / float64(len(numbers))
}