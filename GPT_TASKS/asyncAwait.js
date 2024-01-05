// 1)
async function fetchDataAsync(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: статус ${response.status}`);
        }

        const data = await response.json();
        return data
    } catch(err) {
        console.error('Ошибка при загрузке данных:', err);
    }
}

// fetchDataAsync('https://example.com/data')
//     .then(data => {
//         if (data) {
//             console.log('Полученные данные:', data);
//         }
//     });

// 2)
async function loadImageAsync(imageUrl) {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: статус ${response.status}`);
        }

        const image = await response.blob();
        return image;
    } catch(err) {
        console.error('При загрузке изображения возникла ошибка:', err);
        return null; // можно также повторно выбросить ошибку, если это необходимо
    }
}

// loadImageAsync('https://example.com/image.png')
//     .then(blob => {
//         if (blob) {
//             // Обработка Blob-объекта изображения
//             console.log('Изображение загружено');
//         }
//     });

// 3)
async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        return await response.json();
    } catch (err) {
        console.error("Произошла ошибка: ", err);
        return null;
    }
}

// 4)
async function loadAndProcessData(firstUrl, secondUrl) {
    try {
        const results = [];

        const firstResponse = await fetch(firstUrl);
        if (!firstResponse.ok) {
            throw new Error("Ошибка при загрузке данных с первого URL");
        }
        const firstData = await firstResponse.json();

        const secondResponse = await fetch(secondUrl);
        if (!secondResponse.ok) {
            throw new Error("Ошибка при загрузке данных со второго URL");
        }
        const secondData = await secondResponse.json();

        results.push(firstData, secondData);

        return results;
    } catch (err) {
        console.error(err);
    }
}