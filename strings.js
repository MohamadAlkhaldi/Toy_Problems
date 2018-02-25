// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		var str = 'abcdefghijklmnopqrstuvwxyz'
		return 'position in alphabet: ' + (str.indexOf(character)+1)
	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	/*
	function repeatStr (n, s) {
		//your code is here
		var str = ''
		for(var i = 0; i < s; i++){
			str += n
		}
		return str
	}
	*/

	function repeatStr (n, s){
		if (s === 0){
			return ''
		}
		return n + repeatStr2(n, s-1)
	}