package main

import (
	"fmt"
	"time"
)

func main() {
	go count(5)
	count(5)
}

func count(sec int) {
	for i := 0; i < sec; i++ {
		time.Sleep(time.Second)
		fmt.Println(i)
	}
}
