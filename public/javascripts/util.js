
function checkTelephone(telephone){
	if(telephone == ""){
		document.getElementById("telephonespan").innerHTML= "User Name Can Not be Empty";
		document.getElementById("register_form").register.disabled = true;
	}else{
		document.getElementById("telephonespan").innerHTML= "";
		document.getElementById("register_form").register.disabled = false;
	}
}

function checkPwd(password){
	if(password == ""){
		document.getElementById("passwordspan").innerHTML = "The Password Can Not be Empty";
		document.getElementById("register_form").register.disabled = true;
	}else if(password.length < 6){
		document.getElementById("passwordspan").innerHTML = "The Password Can Not be less than 6 characters";
		document.getElementById("register_form").register.disabled = true;
	}else if(password.length >18){
				document.getElementById("passwordspan").innerHTML = "The Password Can Not be more than 18 characters";
		document.getElementById("register_form").register.disabled = true;
	}else{	
		document.getElementById("passwordspan").innerHTML = "";
		document.getElementById("register_form").register.disabled = false;
	}
}

function checkRPwd(confirm){
	var pwd = document.getElementById("password").value;
	if(confirm != pwd){
		document.getElementById("confirmspan").innerHTML="These two passwords is not same";
		document.getElementById("register_form").register.disabled = true;
	}else{
		document.getElementById("confirmspan").innerHTML="";
		document.getElementById("register_form").register.disabled = false;
	}
}

function checkSchool(school){
	if(school == ""){
		document.getElementById("Schoolspan").innerHTML= "School Name Can Not be Empty";
		document.getElementById("register_form").register.disabled = true;
	}else{
		document.getElementById("Schoolspan").innerHTML= "";
		document.getElementById("register_form").register.disabled = false;
	}	
}

function checkEmail(email){
	if(email == ""){
		document.getElementById("emailspan").innerHTML= "The email Can Not be Empty";
		document.getElementById("register_form").register.disabled = true;
	}
	else {
		document.getElementById("emailspan").innerHTML= "";
		document.getElementById("register_form").register.disabled = false;
	}	
	var merge = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;		
	if(!merge.test(email)){
		document.getElementById("emailspan").innerHTML = "邮箱格式不对";
		document.getElementById("register_form").register.disabled = true;
	}else{
		document.getElementById("emailspan").innerHTML = "";
		document.getElementById("register_form").register.disabled = false;
	}
}	