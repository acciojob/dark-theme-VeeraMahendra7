//your code here
let p = document.getElementById('ptag');
let mainEle = document.getElementById('app');
let btn = document.getElementById('swap');

function swapTheme(){
	mainEle.classList.add('night');
	btn.classList.add('button_night');
}

btn.addEventListener('click', swapTheme)

