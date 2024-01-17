// weakRef.js
// Применение WeakRef для кеширования
function getIncapsulatedFirstExample() {
    function fetchImg() {
        // абстрактная функция для загрузки изображения...
    }

    function weakRefCache(fetchImg) {
        const imgCache = new Map();

        return (imgName) => {
            const cachedImg = imgCache.get(imgName);

            if (cachedImg?.deref()) {
                return cachedImg?.deref();
            }

            const newImg = fetchImg(imgName);
            imgCache.set(imgName, new weakRefCache(newImg));

            return newImg;
        }
    }

    const getCachedImg = weakRefCache(fetchImg);
}

// finalizationRegistry.js
// 1)
function getIncapsulatedSecondExample() {
    const user = { name: "Nick" };

    const registry = new FinalizationRegistry((heldValue) => {
        console.log(`${heldValue} был собран сборщиком мусора.`);
    });

    registry.register(user, user.name);
}

// 2) Кеширование с FinalizationRegistry
function getIncapsulatedThirdExample() {
    function fetchImg() {
        // абстрактная функция для загрузки изображения...
    }

    function weakRefCache(fetchImg) {
        const imgCache = new Map();

        const registry = new FinalizationRegistry((imgName) => {
            const cachedImg = imgCache.get(imgName);
            if (cachedImg && !cachedImg.deref()) imgCache.delete(imgName);
        });

        return (imgName) => {
            const cachedImg = imgCache.get(imgName);

            if (cachedImg?.deref()) {
                return cachedImg?.deref();
            }

            const newImg = fetchImg(imgName);
            imgCache.set(imgName, new weakRefCache(newImg));
            registry.register(newImg, imgName);

            return newImg;
        }
    }

    const getCachedImg = weakRefCache(fetchImg);
}