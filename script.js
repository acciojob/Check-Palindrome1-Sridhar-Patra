// complete the given function

function palindrome(str){
s=str.toLowerCase();
	let ispalindrom=true;
	let i=0 , j=s.length-1;
	while(i<=j && ispalindrom){
		if(s[i]!==s[j]){
			ispalindrom=false;
			break;
		}
		i++;
		j--;
	}  
	console.log(ispalindrom ? "true" : "false");
	
}
module.exports = palindrome
