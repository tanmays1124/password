function generatepassword(){
	var chars="qwertyuiopasdfghjklmnbvczxQWERTYUIOPLKJHGFDSAZXCVBNM1234567890#!@$%^&*()_+-={}[]:;><?,./";
	var passwordlength=document.getElementById("password-length").value;
	var password="";
	var sym=document.getElementById("symbol");
	var lower=document.getElementById("lalpha");
	var upper=document.getElementById("ualpha");
	var num=document.getElementById("number");

	if(passwordlength=="" || passwordlength<6){
		alert("Password length should be minimum of 6 characters");
		return false;
	}
	
	if(upper.checked || lower.checked || num.checked || sym.checked){	

	for (var i = 0; i < passwordlength; i++)
	{
		var randomnumber=Math.floor(Math.random() * chars.length);
		singlechar=chars.substring(randomnumber,randomnumber+1);

		/*for symbols*/
		if(sym.checked){
			if(singlechar=="#" || singlechar=="$" ||  singlechar=="%"  || singlechar=="^"  || singlechar=="&" ||  singlechar=="*" ||  singlechar=="("  || singlechar==")" ||  singlechar=="_" ||  singlechar=="-"  || singlechar=="+"  || singlechar=="="  || singlechar=="]"  || singlechar=="}"  || singlechar=="{"  || singlechar=="["  || singlechar==":"  || singlechar==";"  || singlechar=="?"  || singlechar=="/"  || singlechar==">"  || singlechar=="."  || singlechar=="<"  || singlechar==","  || singlechar=="@" || singlechar=="!" )
			{
			password=singlechar+password;
			continue;
			}
		}
		else {
			if(singlechar=="#" || singlechar=="$" ||  singlechar=="%"  || singlechar=="^"  || singlechar=="&" ||  singlechar=="*" ||  singlechar=="("  || singlechar==")" ||  singlechar=="_" ||  singlechar=="-"  || singlechar=="+"  || singlechar=="="  || singlechar=="]"  || singlechar=="}"  || singlechar=="{"  || singlechar=="["  || singlechar==":"  || singlechar==";"  || singlechar=="?"  || singlechar=="/"  || singlechar==">"  || singlechar=="."  || singlechar=="<"  || singlechar==","  || singlechar=="@" || singlechar=="!" )
				{--i;
				continue;
				}
			}

		/*for lowercase*/
		if(lower.checked){
			if(singlechar=="a" || singlechar=="b" ||  singlechar=="c"  || singlechar=="d"  || singlechar=="e" ||  singlechar=="f" ||  singlechar=="g"  || singlechar=="h" ||  singlechar=="i" ||  singlechar=="j"  || singlechar=="k"  || singlechar=="l"  || singlechar=="m"  || singlechar=="n"  || singlechar=="o"  || singlechar=="p"  || singlechar=="q"  || singlechar=="r"  || singlechar=="s"  || singlechar=="t"  || singlechar=="u"  || singlechar=="v"  || singlechar=="w"  || singlechar=="x"  || singlechar=="y" || singlechar=="z" )
			{
				password=singlechar+password;
				continue;
			}
		}
		else {
			if(singlechar=="a" || singlechar=="b" ||  singlechar=="c"  || singlechar=="d"  || singlechar=="e" ||  singlechar=="f" ||  singlechar=="g"  || singlechar=="h" ||  singlechar=="i" ||  singlechar=="j"  || singlechar=="k"  || singlechar=="l"  || singlechar=="m"  || singlechar=="n"  || singlechar=="o"  || singlechar=="p"  || singlechar=="q"  || singlechar=="r"  || singlechar=="s"  || singlechar=="t"  || singlechar=="u"  || singlechar=="v"  || singlechar=="w"  || singlechar=="x"  || singlechar=="y" || singlechar=="z" )
				{--i;
				continue;
				}
			}

			/*for uppercase*/
			if(upper.checked){
				if(singlechar=="A" || singlechar=="B" ||  singlechar=="C"  || singlechar=="D"  || singlechar=="E" ||  singlechar=="F" ||  singlechar=="G"  || singlechar=="H" ||  singlechar=="I" ||  singlechar=="J"  || singlechar=="K"  || singlechar=="L"  || singlechar=="M"  || singlechar=="N"  || singlechar=="O"  || singlechar=="P"  || singlechar=="Q"  || singlechar=="R"  || singlechar=="S"  || singlechar=="T"  || singlechar=="U"  || singlechar=="V"  || singlechar=="W"  || singlechar=="X"  || singlechar=="Y" || singlechar=="Z" )
			{
				password=singlechar+password;
				continue;
			}
		}
		else {
			if(singlechar=="A" || singlechar=="B" ||  singlechar=="C"  || singlechar=="D"  || singlechar=="E" ||  singlechar=="F" ||  singlechar=="G"  || singlechar=="H" ||  singlechar=="I" ||  singlechar=="J"  || singlechar=="K"  || singlechar=="L"  || singlechar=="M"  || singlechar=="N"  || singlechar=="O"  || singlechar=="P"  || singlechar=="Q"  || singlechar=="R"  || singlechar=="S"  || singlechar=="T"  || singlechar=="U"  || singlechar=="V"  || singlechar=="W"  || singlechar=="X"  || singlechar=="Y" || singlechar=="Z" )
				{--i;
				continue;
				}
			}

			/*For number*/
			if(number.checked){
			if(singlechar=="1" || singlechar=="2" ||  singlechar=="3"  || singlechar=="4"  || singlechar=="5" ||  singlechar=="6" ||  singlechar=="7"  || singlechar=="8" ||  singlechar=="9" ||  singlechar=="0")
			{		
			password=singlechar+password;
			continue;
			}
		}
		else {
			if(singlechar=="1" || singlechar=="2" ||  singlechar=="3"  || singlechar=="4"  || singlechar=="5" ||  singlechar=="6" ||  singlechar=="7"  || singlechar=="8" ||  singlechar=="9" ||  singlechar=="0")
				{--i;
				continue;
				}
			}		
	}

document.getElementById("password").value=password;
}
else{
	alert("Please select atleast one preference");
	return false;
}
	



}

/*for copying password in clipboard*/
function copypassword(){
var text=document.getElementById("password");

	text.select();
	document.execCommand("copy");
}