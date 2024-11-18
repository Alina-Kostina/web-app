const PhotoBlog = require('../models/PhotoBlog');

class PhotoBlogController {
    static getAll(req, res) {
        const tips = PhotoBlog.getAll();
        res.render('index', { tips, title: 'Home' });
    }

    static getItem(req, res) {
        const tip = PhotoBlog.getById(Number(req.params.id));
        if (!tip) {
            return res.status(404).send('Запис не знайдено');
        }
        res.render('item', { tip, title: tip.title });
    }

    static showCreateForm(req, res) {
        res.render('new', { title: 'Додати запис' });
    }

    static createPost(req, res) {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).send('Заповніть всі поля');
        }
        PhotoBlog.addPost(title, description);
        res.redirect('/');
    }

    static privacyPolicy(req, res) {
        res.render('privacy', { title: 'Privacy Policy' });
    }

    static about(req, res) {
        res.render('about', { title: 'About', githubLink: 'https://github.com/Alina-Kostina/web-app' });
    }
}

module.exports = PhotoBlogController;
