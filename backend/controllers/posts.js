const db = require('../models/index');

const fs = require('fs');

const { Post } = db.sequelize.models;


exports.createPost = async (req, res, next) => {
    const postObject = JSON.parse(req.body.post)
    const newPost = new Sauce({
        ...postObject,
        // imageUrl: `${ req.protocol }://${ req.get("host") }/images/${ req.file.filename }`,
    });
        newPost.save()
            .then(() => res.status(201).json({ message: 'Post enregistrée !'}))
            .catch(error => res.status(400).json({ error }));
};

exports.modifyPost = (req, res, next) => {
    const postObject = req.file ? 
        { 
            ...JSON.parse(req.body.post),
            imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        } 
        : { ...req.body };
    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post modifiée !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Post.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Post supprimée !'}))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
  };
  
exports.getAllPosts = (req, res, next) => {
    Post.find()
        .then((posts) => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};
  

exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then((post) => res.status(200).json(post))
        .catch(error => res.status(400).json({ error }));
};
  