function findSquare(formid){
  //Get the input value
  var inputNum = formid.textin.value;
  
  //If valis, compute its square
  var result;
  if(inputNum >=1 && inputNum <=10){
    result = inputNum*inputNum;
    //Otherwise, store an error message
  } else {
    result = "Invalid Number!";
  }
  //Display the result
  document.getElementById("textout").innerHTML = result;
}