func solution(array []int, n int) int {
	var count int = 0
	for _, elem := range array {
			if elem == n {
					count++
			}
	}
	// 결과 반환
	return count
}