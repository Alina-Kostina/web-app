const postsItem = [
    { id: 1, title: 'Об’єктиви: серце професійної зйомки', description: 'Об’єктиви визначають, як камера передає зображення, і мають вирішальне значення для якості зйомки. Ширококутні моделі підходять для пейзажів і архітектури, портретні забезпечують м’яке боке, телеоб’єктиви ідеальні для далеких кадрів, а макрооб’єктиви дозволяють знімати найдрібніші деталі. Провідні бренди, такі як Canon, Nikon, Sony, Sigma та Tamron, пропонують різноманітність для будь-яких завдань.' },
    { id: 2, title: 'Освітлювальне обладнання: основа якісного кадру', description: 'Освітлення — ключовий фактор професійної зйомки, що допомагає створити настрій та виділити деталі. Спалахи, як Godox V1 чи Canon Speedlite, ідеальні для портретної чи репортажної роботи, тоді як постійне світло від Aputure чи Nanlite забезпечує стабільність і гнучкість у предметній зйомці.' },
    { id: 3, title: 'Аксесуари для світла: увага до деталей', description: 'Додаткові аксесуари, такі як софтбокси, LED-панелі чи парасолі, створюють потрібні ефекти освітлення, роблячи кадри природними чи драматичними. Вони дозволяють гнучко адаптуватися до умов зйомки та творчих задумів.' },
];

class PhotoBlog {
    static getAll() {
        return postsItem;
    }

    static getById(id) {
        return postsItem.find(post => post.id === id);
    }

    static addPost(title, description) {
        const newPost = {
            id: postsItem.length + 1,
            title,
            description,
        };
        postsItem.push(newPost);
        return newPost;
    }
}

module.exports = PhotoBlog;
