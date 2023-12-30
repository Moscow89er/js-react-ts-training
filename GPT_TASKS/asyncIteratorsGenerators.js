// 1) Асинхронный генератор для постраничного получения данных
async function* getUsersByFetch(urlApi) {
    let pageIndex = 1;
    let hasNextPage = true;

    while (hasNextPage) {
        const response = await fetch(`${apiUrl}?page=${pageIndex}`);
        const data = await response.json();

        for (const user of data.users) {
            yield user;
        }

        pageIndex++;
        hasNextPage = data.hasNextPage;
    }
}

(async () => {
    const apiUrl = 'https://example.com/api/users';

    for await(const user of getUsersByFetch(apiUrl)) {
        console.log(user); // Обработка каждого пользователя

        // Допустим, мы хотим остановиться после первых 10 пользователей
        if (--first10 <= 0) break;
    }
})()

// 2) Асинхронный итератор для чтения файла
const objToRead = {
    name: "Nick",
    age: 34,

    async *[Symbol.asyncIterator]() {
        const keys = Object.keys(this); // Получаем ключи объекта
        
        for (const key of keys) {
            // Пауза между значениями, ожидание
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Используем `yield` для асинхронного возвращения ключа и значения
            yield { key, value: this[key] };
        }
    }
}

(async () => {
    for await (const prop of objToRead) {
        console.log(prop);
    }
})()