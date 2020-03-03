package main

import "fmt"

func main() {
	//	first := make(chan string)

	//	first <- "Demene"  //Kanala değer atama

	//	text := <-first  //kanaldan değer çekme

	x := []int{4, 7, 1, 5, 6, 8, 9, 3}

	first_chan := make(chan int)

	go topla(x, first_chan)
	go topla(x, first_chan)

	z, y := <-first_chan, <-first_chan

	fmt.Println(z, y, z+y)

}

func topla(x []int, first_chan chan int) {

	var total int

	for i := 0; i < len(x); i++ {
		total = total + x[i]
	}
	first_chan <- total
}
