//your code here
let p = document.getElementById('ptag');
let mainEle = document.getElementById('app');
let btn = document.getElementById('swap');

function swapTheme(){
	mainEle.classList.toggle('night');
	mainEle.classList.toggle('day');
	
	btn.classList.toggle('button_night');
	btn.classList.toggle('button_day');
	
}

btn.addEventListener('click', swapTheme)

