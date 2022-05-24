var total = 0;
var input = prompt ("Enter a number, or 0 to stop");
while (input!=0){
	total += Number(input);
	input = prompt("Enter a number, or 0 to stop");
}
document.write("Total equals " + total);