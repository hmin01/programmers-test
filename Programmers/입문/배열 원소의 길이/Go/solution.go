func solution(strlist []string) []int {
	answer := make([]int, len(strlist))
	// 원소 길이 파악 및 처리
	for i, value := range strlist {
			answer[i] = len(value)
	}
	// 결과 반환
	return answer
}