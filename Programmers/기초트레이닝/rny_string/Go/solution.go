import "strings"

func solution(rny_string string) string {
	return rny_string.ReplaceAll(rny_string, "m", "rn")
}