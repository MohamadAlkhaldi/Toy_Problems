	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		//your code is here
		var str = ''
		for(var i = 0; i < input.length;i++){
			if(input[i] === input[i].toUpperCase()){
			str = str + input.slice(i, i+1).toLowerCase()
		}	else if(input[i] === input[i].toLowerCase()){
			str = str + input.slice(i, i+1).toUpperCase()
		}
		}
		return str
	}

	