let menu__middleElem = document.querySelector('.menu__midle');
console.log('menu Middle', menu__middleElem.offsetTop);

let menu__itemElems = document.querySelectorAll('.menu__item')

let maxDifference = -(menu__itemElems[0].offsetTop - menu__middleElem.offsetTop);
console.log('max dif', maxDifference)



menu__itemElems.forEach(item => {
	let difference = item.offsetTop - menu__middleElem.offsetTop;
	if(((maxDifference - difference)/maxDifference * 100) > 100){
		console.log(-(((maxDifference - difference)/maxDifference * 100) - 200))
	}else{
		console.log((maxDifference - difference)/maxDifference * 100);
	}
});