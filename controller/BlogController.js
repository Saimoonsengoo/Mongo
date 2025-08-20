const blogModel = require('../models/Blog')

const BlogController = {

    index: async (req, res, next) => {
        try {
            let blogs = await blogModel.find().sort({ createdAt: -1 });
            res.render('home', { blogs, title: 'Home' });
        } catch (e) {
            next(e);
        }
    },

    post: async (req, res, next) => {
        try {
            let { title, intro, body } = req.body;
            let blog = new blogModel({ title, intro, body });
            await blog.save();
            console.log('data saved!');
            res.redirect('/blogs');   // ✅ fixed
        } catch (e) {
            next(e);
        }
    },

    create: (req, res) => {
        res.render('blogs/create', { title: 'Blog Create' });
    },

    delete: async (req, res, next) => {
        try {
            await blogModel.findByIdAndDelete(req.params.id);
            res.redirect('/blogs');   // ✅ fixed
        } catch (e) {
            next(e);
        }
    },

    detail: async (req, res, next) => {
        try {
            let blog = await blogModel.findById(req.params.id);
            res.render('blogs/show', { blog, title: 'Blog Detail' });
        } catch (e) {
            next(e);
        }
    }


};

module.exports = BlogController;