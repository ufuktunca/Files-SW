package main

import "fmt"

func main() {
	var demene [5]int{45,78,12,45,69}
	/*demene[0] = 54
	demene[1] = 21
	demene[2] = 24
	demene[3] = 78
	demene[4] = 65*/
	fmt.Println(topla(demene))

}

func topla(x [5]int) int {
	var total int
	for i := 0; i < 5; i++ {
		total = total + x[i]
	}
	return total
}
