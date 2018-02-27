// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

	function repeatStr(str, num){
		var str1 = ''
		while(num > 0){
			str1 += str.toLowerCase()
			num = num - 1
		}
		return str1

	}

    function accum(input){
        //your code is here
        var arr = input.split('')
        for(var i =0; i < arr.length; i++){
        	arr[i] = arr[i].toUpperCase() + repeatStr(arr[i][0], i)
        }
        return arr.join('-')
    }