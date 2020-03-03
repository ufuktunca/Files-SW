package main

import "fmt"

func main() {
	type Stuff struct {
		name    string
		surname string
		age     int
		salary  int
	}
	x := Stuff{
		name:    "ufuk",
		surname: "tunca",
		age:     21,
		salary:  0,
	}
	fmt.Println(x)
	fmt.Println(x.age)
	fmt.Println(x.name)
	fmt.Println(x.salary)
	fmt.Println(x.surname)
}
