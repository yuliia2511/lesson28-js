let name = prompt('Ваше ім\'я?')
alert('Привіт,' + name)

let year = prompt('Ваш рік народження?')
let age = (2022-year) 
alert(`Ваш вік:` + age )

let WidthSide = prompt('Яка довжина сторони квадрату?')
let perimeter = (WidthSide*4)
alert('Периметр квадрату:' + perimeter)

let radius = prompt('Який радіус кола?')
let area = (3.14*(radius*2))
alert('Площа кола:' + area)

let distance = prompt('Яка відстань в кілометрах між Одесою та Мелітополем?')
let time = prompt('Скільки годин Ви витратите на подорож?')
let speed = (distance/time)
alert('Швидкість, з якою необхідно рухатися, щоб встигнути вчасно:' + speed)

const euro = 29.71
const dollar = 29.54
let DollarSum = prompt('Введіть суму в долларах для розрахунку')
let EuroSum = (DollarSum*(dollar/euro))
alert('Отримано:' + EuroSum + 'євро')




