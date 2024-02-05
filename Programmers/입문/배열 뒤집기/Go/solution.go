func solution(num_list []int) []int {
	// 배열의 길이
	size := len(num_list)
	// 결과 반환을 위한 배열
	answer := make([]int, size)
	// 배열 뒤집기
	for i, value := range num_list {
			answer[size - 1 - i] = value
	}
	// 결과 반환
	return answer
}