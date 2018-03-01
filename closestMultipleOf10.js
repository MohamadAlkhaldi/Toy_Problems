 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function incToTen (n)){
 	while(n%10 !== 0){
 		n++
 	}
 	return n
 }

 function decToTen (n)){
 	while(n%10 !== 0){
 		n--
 	}
 	return n
 }

 function closestMultipleOf10(num) {
 	//your code is here
 	if(incToTen(num)-num > num-decToTen(num)){
 		return decToTen(num)
 	}
 	return incToTen(num)

 }