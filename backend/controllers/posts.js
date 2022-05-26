const db = require('../models/index');

const { Post } = db.sequelize.models;

const fs = require('fs');


exports.createPost = async (req, res, next) => {
    console.log(req.body);
    const newPost = new Post({
        ...req.body,
        // imageUrl: `${ req.protocol }://${ req.get("host") }/images/${ req.file.filename }`,
    });
        newPost.save()
            .then(() => res.status(201).json({ message: 'Post enregistrée !'}))
            .catch(error => res.status(400).json({ error }));
};

exports.modifyPost = (req, res, next) => {
    const updatePost= req.file ? 
        { 
            ...JSON.parse(req.body),
            // imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        } 
        : { ...req.body };
        console.log(updatePost);
    Post.update({ ...updatePost}, { where: { id: req.params.id }})
        .then(() => res.status(200).json({ message: 'Post modifiée !'}))
        .catch(error => res.status(400).json({ error }));
  };

exports.deletePost = (req, res, next) => {
    console.log(req.params.id);
    Post.findOne({ where: {id: req.params.id}})
        .then(post => {
            console.log(post);
            // const filename = post.imageUrl.split('/images/')[1];
            // fs.unlink(`images/${filename}`, () => {
                Post.destroy({ where: {id: req.params.id}})
                    .then(() => res.status(200).json({ message: 'Post supprimée !'}))
                    .catch(error => res.status(400).json({ error }));
            // });
        })
        .catch(error => res.status(500).json({ error }));
  };
  
exports.getAllPosts = (req, res, next) => {
    Post.findAll()
        .then((posts) => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({ where: {id: req.params.id }})
        .then((post) => res.status(200).json(post))
        .catch(error => res.status(400).json({ error }));
};