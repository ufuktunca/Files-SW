package main

import "fmt"

func main() {
	var x [5]int
	x[0] = 20
	x[1] = 65
	x[2] = 24
	x[3] = 71
	x[4] = 1

	fmt.Println(x)

	var total int

	for i := 0; i < 5; i++ {
		total = x[i] + total
	}
	fmt.Println("sum of all numbers=", total)

	var total1 int
	for i := 0; i < 5; i++ {
		total1 = total1 + x[i]
	}
	fmt.Println("average of numbers", total1/5)

}
