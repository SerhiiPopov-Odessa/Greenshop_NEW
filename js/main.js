/////////////////////////////////////////  Ползунок  /////////////////////////////////////////////////////////////////////////
var snapSlider = document.getElementById('slider-snap');

noUiSlider.create(snapSlider, {
	start: [0, 500],
	snap: true,
	connect: true,
	range: {
		'min': 0,
		'10%': 50,
		'20%': 100,
		'30%': 150,
		'40%': 500,
		'50%': 800,
		'max': 1000
	}
});
var snapValues = [
	document.getElementById('slider-snap-value-lower'),
	document.getElementById('slider-snap-value-upper')
];

snapSlider.noUiSlider.on('update', function (values, handle) {
	snapValues[handle].innerHTML = values[handle];
});

/////////////////////////////////////////  accordion  /////////////////////////////////////////////////////////////////////////
$(function () {
	$("#accordion").accordion();
});


/////////////////////////////////////////  Гамбургер нажатие  ///////////////////////////////////////////////////////////////////
(function () {
	var button = document.getElementById('button-menu');
	button.addEventListener('click', function (event) {
		event.preventDefault();
		var menu = document.getElementById('nav-menu');
		menu.classList.toggle('is-open');
	})
})();
/////////////////////////////////////////  Фильтр открыть   ///////////////////////////////////////////////////////////////////
(function () {
	var button = document.getElementById('id-button-short-by');
	button.addEventListener('click', function (event) {
		event.preventDefault();
		var menu = document.getElementById('id-button-short-by-is-open');
		menu.classList.toggle('is-open');
		var menu = document.getElementById('id-flex-basis-is-open');
		menu.classList.toggle('is-open');
	})
})();


/* (function () {
	var button_menu = document.getElementById('button-menu');
	var button_short_by = document.getElementById('button-short-by');
	button_menu.addEventListener('click', function (event) {
		event.preventDefault();
		var menu = document.getElementById('nav-menu');
		menu.classList.toggle('is-open');
	})
	button_short_by.addEventListener('click', function (event) {
		event.preventDefault();
		var menu = document.getElementById('button-short-by');
		menu.classList.toggle('is-open');
	})
})(); */

/* window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
}) */

//<nav class="main-section__nav nav-menu">
//                <ul class="nav-menu__list">
//                    <li class="nav-menu__list-item"><a href="#about-me">Обо мне</a></li>
//                    <li class="nav-menu__list-item"><a href="#lessons">Занятия</a></li>
//                    <li class="nav-menu__list-item"><a href="#">Запись</a></li>
//                </ul>
//           </nav> 
//id="about-me"

/* Выражение (function(){})(); в JavaScript представляет собой немедленно вызываемую функциональную инструкцию (IIFE - Immediately Invoked Function Expression). Эта конструкция позволяет создать анонимную функцию и сразу же её выполнить. Она часто используется для создания приватной области видимости (scope) для переменных, предотвращая их загрязнение глобальной области видимости.
Как это работает:
1. (function(){}):
Определяет анонимную функцию. В данном случае функция не имеет имени и не привязана к какой-либо переменной. Скобки вокруг функции (( ... )) превращают её из декларации функции в выражение, что позволяет использовать её как значение.
2. ():
Эти скобки после определения функции, вызывают её немедленно. Таким образом, функция выполняется сразу же, как только интерпретатор доходит до этого выражения.
Зачем это нужно:
Создание приватной области видимости:
Переменные, объявленные внутри IIFE, не доступны извне. Это позволяет создавать модули и избегать конфликтов имен переменных.
Инициализация:
IIFE часто используются для инициализации чего-либо при загрузке страницы, например, подключения к базе данных или настройки начальных значений.
Избежание загрязнения глобальной области видимости:
Использование IIFE позволяет не добавлять переменные в глобальную область видимости window (в браузере) или global (в Node.js), что делает код более чистым и предсказуемым. */

