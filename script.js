

const iconMenu = document.querySelector('.btn')
const menu = document.querySelector('.header')
const iconX = document.querySelector('.bx-x')
const iconH = document.querySelector('.bx-menu')
const boxSectionMenu = document.querySelector('#box_section_menu')


iconMenu.addEventListener('click', function () {
	menu.classList.toggle('menu_show')
	iconH.classList.toggle('bx-menu_disguise')
	iconX.classList.toggle('bx-menu_disguise')
})

boxSectionMenu.addEventListener('click', function(e){
	if(e.target.classList.contains('close')){
		menu.classList.toggle('menu_show')
		iconH.classList.toggle('bx-menu_disguise')
		iconX.classList.toggle('bx-menu_disguise')
	}
})

