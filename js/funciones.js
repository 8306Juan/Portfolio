let lblsNav = document.querySelectorAll('.nav li a');
let liA = document.getElementById('liA');
let liH = document.getElementById('liH');
let liC = document.getElementById('liC');
let sendFC = document.querySelector(".formContacto");
let closeCon = document.getElementById('closeContact');


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

/*
	Cosas que Amo	Cosas que Amo	Cosas que Amo	Cosas que Amo	Cosas que Amo
*/
let fotoP = document.getElementById('foto');
let cqa1 = document.querySelector('#cqa1');
let cqa2 = document.querySelector('#cqa2');
let cqa3 = document.querySelector('#cqa3');

const cosasQueAmo = ()=>{
	if (cqa1.classList.value == 'cqa1off'){

		cqa1.classList.remove('cqa1off');
		cqa1.classList.add('cqa1on');

		cqa2.classList.remove('cqa2off');
		cqa2.classList.add('cqa2on');
		
		cqa3.classList.remove('cqa3off');
		cqa3.classList.add('cqa3on');
	}else if(cqa1.classList.value == 'cqa1on'){

		cqa1.classList.remove('cqa1on');
		cqa1.classList.add('cqa1off');
		
		cqa2.classList.remove('cqa2on');
		cqa2.classList.add('cqa2off');
		
		cqa3.classList.remove('cqa3on');
		cqa3.classList.add('cqa3off');
	}
}

fotoP.addEventListener('mouseover', cosasQueAmo);
fotoP.addEventListener('mouseout', cosasQueAmo);


cqa2.lastElementChild.addEventListener('dblclick',()=>{
	alert(`:O \n ¡¡GENIAL!!\n Parece que descubriste un Easter Egg`);

	let easterEggs = document.querySelector('.easterEggs');

	easterEggs.style.transition="1s";
	easterEggs.style.opacity=1;
	easterEggs.innerHTML += `
	<div style="max-width: 100px; text-align: center;">
		<img src="img/easterEgg.jpg">
		<p>Shadow of the Colossus</p>		
	</div>`;
})


/*
	CONTACTO	CONTACTO	CONTACTO	CONTACTO	CONTACTO	CONTACTO
*/

liC.addEventListener("click",()=>{
	sendFC.style.top=`${scrollY}px`;
	sendFC.classList.toggle("on");
	document.body.style.overflowY = 'hidden';
});

closeCon.addEventListener("click",()=>{
	sendFC.classList.toggle("on");
	document.body.style.overflowY = 'initial';
})
