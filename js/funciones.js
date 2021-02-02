let lblsNav = document.querySelectorAll('.nav li a');
let liA = document.getElementById('liA');
let liH = document.getElementById('liH');
let liC = document.getElementById('liC');
let sendFC = document.querySelector(".formContacto");
let closeCon = document.getElementById('closeContact');


let btnRes = document.querySelector(".btnRes");
let nav = document.querySelector(".nav");

let activeScroll=true;

navLis = [liA,liH,liC];

for (let i=0; i<navLis.length; i++){

	navLis[i].addEventListener("mouseover", ()=>{
		navLis[i].classList.add('nav-on');
	});

	navLis[i].addEventListener("mouseout", ()=>{
		navLis[i].classList.remove('nav-on');
	})
}


window.addEventListener("scroll", ()=>{
		
})

liC.addEventListener("click",()=>{
	sendFC.style.top=`${scrollY}px`;
	sendFC.classList.toggle("on");
	document.body.style.overflowY = 'hidden';
});

closeCon.addEventListener("click",()=>{
	sendFC.classList.toggle("on");
	document.body.style.overflowY = 'initial';
})

btnRes.addEventListener("click", ()=>{
	
	if (nav.style.display=="block") {
		nav.style.display="none";
	}else{
		nav.style.display="block";
	}
	
})

