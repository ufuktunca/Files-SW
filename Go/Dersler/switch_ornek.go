package main

import (
	"fmt"
	"time"
)

func main() {
	switch time.Now().Weekday() {
	case time.Monday:
		fmt.Println("Pazar")
	case time.Sunday:
		fmt.Println("Pazartesi")
	case time.Thursday:
		fmt.Println("Salı")
	case time.Wednesday:
		fmt.Println("çarşamba")
	case time.Tuesday:
		fmt.Println("perşembe")
	case time.Friday:
		fmt.Println("CUMA")
	case time.Saturday:
		fmt.Println("cumartesi")

	}
}
