// 1
const p = 3.14;
let calcConeVolume = (r, h) => (1/3*p)*(r**2)*h;

let calcConeArea = (r, l) => p*r*l;

alert ("Вычислим объем конуса");

alert (calcConeVolume(
	prompt ("Введите радиус основания"),
    prompt ("Введите высоту")
	) );

alert ("Вычислим площадь боковой поверхности конуса");

alert (calcConeArea (
	prompt ("Введите радиус основания"),
    prompt ("Введите длинну образующей")
	) );

//2
let calcEquation = (a,b) => -b/a;

alert("Решим уравнение ax + b = 0  и найдем x ");

alert (calcEquation (
	prompt ("Введите a"),
	prompt ("Введите b")
	) );

//3
let calcCircleRadius = (r) => p*(r**2);

for (let i = 0; i < 10; i++) {
	alert (calcCircleRadius (1+i*2) );
};