package main

import "fmt"

func main(){

	for i:=0; i<10; i++{
		if i%2==0{
			fmt.Println(i)
		} else if i%3==0{
			fmt.Println(i)
		}
	}
}