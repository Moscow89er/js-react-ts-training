// Методы сортировки

// Сортировка пузырьком
function bubbleSort(arr) {
    let n = arr.length; // текущий размер сегмента массива, который еще не отсортирован
    let swapped; // флаг, который показывает, произошла ли перестановка элементов в текущей итерации
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr [i + 1]) {
                // меняем элементы местами
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // уменьшаем диапазон для следующей итерации
    } while (swapped); // выполняем цикл до момента, пока условие является истинно
    return arr;
}

// Основная особенность do ... while заключается в том,
// что условие проверяется после выполнения инструкций цикла,
// а не до, как в классическом while. Это означает,
// что инструкции внутри do ... while гарантированно выполнятся хотя бы один раз,
// даже если условие изначально ложно.


// Сортировка слиянием
function mergeSort(arr) {
    if (arr.length < 2) return arr; // проверяем длину массива. Если он содержит менее 2 элементов, возвращаем его, так как он уже считается отсортированным

    let middle = Math.floor(arr.length / 2); // находим середину массива
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right)); // рекурсивно вызываем функцию и затем объединяем с помошью функции merge
}

function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) { // пока оба массива не пусты сравниваем их первые элементы
        if(left[0] <= right[0]) { // если первый левый элемент меньше или равен первому элементу правого
            result.push(left.shift()); // тогда мы добавляем его в результат и удаляем его из левого массива
        } else {
            result.push(right.shift()); // в противном случае добавляем и удаляем первый элемент правого массива
        }
    }
    return result.concat(left, right); // после того как массив опустошится мы просто добавляем оставшиеся элементы обоих массивов в результат
}

// Цикл while в JavaScript выполняет указанный блок кода до тех пор,
// пока условие цикла истинно (оценивается как true).


// Последовательность Фибоначчи
// - это последоваетельность в которой каждое число является суммой двух предыдущих

// // рекурсивный метод
// function fibonacci(n) {
//     if (n <= 1) return n; // базовый случай, нужен чтобы прекратить рекурсию и избежать бесконечного вызова функции
//     return fibonacci(n - 1) + fibonacci(n - 2); // вычисление двух предыдущих чисел фибоначчи
// }

// // рекурсивный метод с мемоизацией
// function fibonacci(n, memo = {}) { // мемо - объект, который хранит ранее вычисленные изменения
//     if (n in memo) return memo[n]; // проверка есть ли ранее вызванное значение мемо
//     if (n <= 1) return n; 
//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//     return memo[n];
// }

// // итеративный метод
// function fibonacci(n) {
//     if (n <= 1) return n; 
//     let a = 0; // первое число Фибоначчи
//     let b = 1; // второе число Фибоначчи
//     for (let i = 2; i <= n; i++) { // начинаем цикл с третьего числа, так как первые два уже известны
//         let c = a + b; // высчитываем значение третьего числа
//         a = b; // сдвигаем значение на слудующее число в последовательности
//         b = c;
//     }
//     return b; // возвращаем последнее число в последоваетльности Фибоначчи
// }
