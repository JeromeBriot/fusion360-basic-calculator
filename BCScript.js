function addChar(C){
	document.form.textview.value = document.form.textview.value+C
}

function compute(){
	var exp = document.form.textview.value;
	if(exp){
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

function convert(){
	
	var liste, from_unit, to_unit, subject;
	
	liste = document.getElementById("from");
	from_unit = liste.options[liste.selectedIndex].text;

	liste = document.getElementById("to");
	to_unit = liste.options[liste.selectedIndex].text;
	
	liste = document.getElementById("subject");
	subject = liste.options[liste.selectedIndex].text;
	
	document.form.textview.value = conversionObject.functions.converter(subject, from_unit, to_unit, document.form.textview.value);

}

function setSubject(){
	
	var liste, subject;
	
	liste = document.getElementById("subject");
	subject = liste.options[liste.selectedIndex].text;
	
	setSelectChoices(subject)
	
}

function setSelectChoices(subject){
	
	var liste_from, liste_to
	
	liste_from = document.getElementById("from");
	liste_to = document.getElementById("to");
	
	liste_from.options.length = 0;
	liste_to.options.length = 0;
	
	for (var key in conversionObject.master[subject]){		
		liste_from.options[liste_from.length] = new Option(key,key);
		liste_to.options[liste_to.length] = new Option(key,key);		
	}
	
}
