import "strconv"

func solution(n_string string) int {
	converted, err := strconv.Atoi(n_string)
	if err != nil {
		panic(err)
	}
	// Return
	return converted
}