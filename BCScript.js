function addChar(C){
	document.form.textview.value = document.form.textview.value+C
}

function compute(){
	var exp = document.form.textview.value;
	if(exp){
	  /*document.form.textview.value = eval(exp)*/
	  document.form.textview.value = stringMath(exp)
	}
}	

function removeAllChar(){        
	document.form.textview.value = "";
}

function removeOneChar(){
	var exp = document.form.textview.value;
	if(exp){
	  document.form.textview.value = exp.substring(0, exp.length-1);
	}
}

function dispChar(e){
	if(e.keyCode==13){
		compute();
		return false;
	}	
	
}

