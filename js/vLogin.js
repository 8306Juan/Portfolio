let nombreI = document.getElementById("nombreI");
let emailI = document.getElementById("emailI");
let btnSub = document.getElementById("btnSub");

function validaUser() {
	if(/^[A-za-z0-9._-]{4,15}$/.test(nombreI.value)){
		nombreI.classList.add("border-green-600");
	}else{
		nombreI.classList.add("border-red-600");
	}
	validaMail();
}

function validaMail() {
	if(/^[A-za-z0-9._-]+@[A-za-z]{2,8}\.[a-zA-z.]{2,6}$/.test(emailI.value)){
		emailI.classList.add("border-green-600");
	}else{
		emailI.classList.add("border-red-600");
	}
}



btnSub.addEventListener("click",validaUser);