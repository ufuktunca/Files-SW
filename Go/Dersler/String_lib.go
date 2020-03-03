package main

import (
	"fmt"
	"math"
	"sort"
	"strings"
	"time"
)

func main() {
	fmt.Println(strings.Contains("Demene", "Demene"))
	fmt.Println(strings.Index("Demene", "m"))
	fmt.Println(strings.Count("Demene", "e"))

	d := time.Now()
	yil, ay, gun := d.Date()

	fmt.Println("yıl:", yil)
	fmt.Println("ay:", ay)
	fmt.Println("gun:", gun)

	harfler := []string{"H", "L", "Y", "I", "C"}
	sort.Strings(harfler)
	fmt.Println(harfler)

	fmt.Println(daire(2))
}

func daire(yarıcap float64) float64 {
	return math.Pi * yarıcap * yarıcap
}
