var val = 1;
var count = 1;
var fact = 1;
document.write ("<pre> VALUE FACTORIAL\n");
do {
	document.write (val + " " + fact +"\n");
	count++;
	val++;
	fact = fact * val;
} while(count <= 20);
document.write("</pre>");