const cars = ['Honda', 'Kia', 'Toyota', 'BMW', 'Audi', 'VW', 'Hummer'];
const numbers = [1,1,1,2,3,4,2,2,3,5,7,8,9,7,6,5,4,4,3,2,2,3,5,6,7];
const nums = [1,4,65,43,23,2,55,32,78,1,5,3]
const arr = [false, 'red', 0, 2, "", null, true, NaN, undefined];

// 1) Суммируем все значения в массиве
// function sum(numbers) { // вар. 1
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum;
// }

// function sum(arr) { // вар. 2
//     return arr.reduce((acc, cur) => (acc + cur), 0);
// }
// console.log(sum(numbers));

// const sum = nums.reduce((acc, cur) => acc + cur); // вар. 3
// console.log(sum);



// 2) Выводим правдивые значения
// const new_arr = arr.filter(Boolean);
// console.log(new_arr);



// 3) Конвертация массива в объект
// const obj = { ...cars };
// console.log(cars);
// console.log(obj);



// 4) Как извлечь уникальное значение из массива
// const uni_nums = [...new Set(numbers)]; // вар. 1
// const uni_nums = Array.from(new Set(nums)); // вар.2
// console.log(uni_nums);



// 5) Как заменить конкретное значение в массиве
// cars.splice(0,2, 'Nissan', 'Tesla');
// console.log(cars);



// 6) Перебор массива без метода map
// const new_cars = [
//     {car: 'Honda', color: 'Red'},
//     {car: 'Toyota', color: 'Green'},
//     {car: 'Seat', color: 'Blue'},
//     {car: 'BMW', color: 'Yellow'},
// ]
// const car_name = Array.from(new_cars, ({car}) => car);
// console.log(car_name);



// 7) Очищение массива
// nums = []; // вар. 1

// nums.splice(0, nums.length); // вар. 2 - наиболее праильный
// console.log(nums);



// 8) Найти пересечения в двух массивах
// const new_nums = [...new Set(nums)].filter(item => numbers.includes(item));
// console.log(new_nums);



// 9) Как сделать реверс массива
// const reversedCars = cars.reverse();
// console.log(reversedCars);



// 10) Как получить индекс поледнего вхождения элемента в массиве
// const last_index = nums.lastIndexOf(1);
// console.log(last_index);



// 11) Как заполнить массив значениями
// const new_arr = new Array(10).fill(1);
// console.log(new_arr);



// 12) Как найти случайное число из массива
function randomizeNums(arr) {
    const result = arr[Math.floor(Math.random() * (nums.length))];
    return result;
}

console.log(randomizeNums(nums));

const rand_num = nums[(Math.floor(Math.random() * (nums.length)))];
console.log(rand_num);