var val = 1;
var count = 1;
var fact = 1;
document.write ("<pre> VALUE FACTORIAL\n");
while (count <= 10){
	document.write (val + " " + fact +"\n");
	count++;
	val++;
	fact = fact * val;
}
document.write("</pre>");