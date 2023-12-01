// Дайте функции понятное название и добавьте такие правила: нужно проверять, является ли цена числом (при помощи typeof), суммируем только положительные цены,
// а если находим не число или отрицательное число, то выдаем ошибку при помощи throw.
function calculateSum(cart) {
    let sum = 0;
    
    for (let { price } of cart) {
        if (typeof price === "number" && price > 0) {
        sum += price;
        } else {
        throw new Error("Ошибка!")
        }
    }
    
    return sum;
    }
    
    const items = [{ price: 10 }, { price: 20 }, { price: 30 }, { price: 40 }];
    // console.log(calculateSum(items));
    
    // Возьмите эту структуру данных и для нее напишите функцию, которая дополняет ее товарами по примеру тех, которые уже есть.
    // Функция принимает название каталога, название и стоимость товара. Если каталога не существует, то его необходимо создать и добавить туда товар.
    // Также сделать проверку на ввод числа, функция должна принимать числа даже в строке, но при вводе строки выводить NaN.
    const purchase = {
    Electronics: [
        { name: 'Laptop', price: 1500 },
        { name: 'Keyboard', price: 100 }
    ],
    Textile: [
        { name: 'Bag', price: 50 },
        { name: 'Laptop', price: 100 }
    ],
    }
    
    purchase.addToCart = function(catalog, name, price) {
        if (!isFinite(price)) {
            throw new Error("Введите число!")
        }
    
        if (this[catalog]) {
            this[catalog].push({ name, price });
        } else {
            this[catalog] = [{ name, price }];
        }
    }
    
    purchase.addToCart('Textile', 'eeee', '11');
    // console.log(purchase);
    
    // Напишите функцию find, которая будет проходить по структуре из предыдущей задачи и находить товар по его имени (проверяя все группы товаров).
    // Имена могут повторяться, но на этот раз нас интересует только первый товар,у которого имя совпало.
    function findFirst(obj, searchPrompt) {
        for (let catalog in obj) {
            for (let item of obj[catalog]) {
                if (item.name === searchPrompt) {          
                    console.log(item);
                    return;
                }
            }
        }
    }
    
    // const resultFirst = findFirst(purchase, 'Laptop'); //{ name: 'Laptop', price: 1500 }
    // console.log(resultFirst);
    
    // Теперь расширим предыдущую задачу: нужно так изменить функцию find, чтобы она возвращала массив,
    // содержащий все товары с указанным именем. Если ни одного не нашли, то пустой массив.
    function findAll(obj, searchPrompt) {
        const searchResult = [];
    
        console.log(obj);
    
        for (let catalog in obj) {
            if (obj.hasOwnProperty(catalog) && Array.isArray(obj[catalog])) {
                for (let item of obj[catalog]) {
                    if (item.name === searchPrompt) {
                        console.log(item);
                        searchResult.push(item);
                    }
                }
            }
        }
    
        return searchResult;
    }
    
    
    // const resultAll = findAll(purchase, 'Laptop');
    // console.log(resultAll);
    
    // Найти вес всех вещей, цена которых более 80 и количество менее 7
    const foods = [
        { name: 'Паста болоньезе', weight: 350, price: 33, quanity: 3 },
        { name: 'Спаггети', weight: 350, price: 56, quanity: 8 },
        { name: 'Суп', weight: 400, price: 68, quanity: 16 },
        { name: 'Пицца', weight: 675, price: 139, quanity: 30 },
        { name: 'Молоко', weight: 1600, price: 339, quanity: 8 },
        { name: 'Овощи', weight: 740, price: 159, quanity: 1 },
        { name: 'Сыр', weight: 230, price: 99, quanity: 4 },
        { name: 'Мука', weight: 230, price: 69, quanity: 5 }
    ];
    
    function findTotalWeight(arr, minPrice, maxQuantity) {
        const filteredWeights = [];
    
        for (let obj of arr) {
            if (obj.price > minPrice && obj.quanity < maxQuantity) {
                filteredWeights.push(obj.weight);
            }
        }
    
        return filteredWeights.reduce((acc, cur) => acc + cur, 0);
    }
    
    console.log(findTotalWeight(foods, 80, 7));
    
    // С бекенда приходят сл данные, напишите функцию, которая меняет его структуру (пример ниже)
    const employees = [
    {
        name: 'Ilya',
        gender: 'male',
        year: '1998'
    },
    {
        name: 'Maxim',
        gender: 'male',
        year: '1993'
    },
    {
        name: 'Lena',
        gender: 'female',
        year: '2001'
    },
    {
        name: 'Masha',
        gender: 'female',
        year: '1999'
    },
    {
        name: 'Ivan',
        gender: 'male',
        year: '2003'
    }
    ];
    
    /* 
    {
    "male": [{
        "name": "Ilya",
        "year": "1998"
        }, 
        {
        "name": "Maxim",
        "year": "1993"
        }, 
        {
        "name": "Ivan",
        "year": "2003"
        }],
    
    "female": [{
        "name": "Lena",
        "year": "2001"
        }, 
        {
        "name": "Masha",
        "year": "1999"
        }]
    }
    */
    
    function sortGender(arr) {
        const resultedObj = {
            male: [],
            female: []
        };
    
        for (let obj of arr) {
            console.log(obj);
    
            const {name, gender, year} = obj;
    
            if (gender === 'male') {
                resultedObj['male'].push({name, year});
            } else if (gender === 'female') {
                resultedObj['female'].push({name, year});
            }
        }
    
        return resultedObj;
    }
    
    console.log(sortGender(employees))