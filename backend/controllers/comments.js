const db = require('../models/index');

const { Comment, Post } = db.sequelize.models;


exports.createComment = (req, res, next) => {
    Comment.create({ ...req.body, userId: req.body.userId, postId: req.body.postID }) 
    .then(() => res.status(201).json({ message: 'Commentaire ajouté !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.modifyComment = (req, res, next) => {
    const updateComment = req.file ? 
        { 
            ...JSON.parse(req.body),
        } 
        : { ...req.body };
    Comment.update({ ...updateComment}, { where: { id: req.params.Id }})
        .then(() => res.status(200).json({ message: 'Commentaire modifié !'}))
        .catch(error => res.status(400).json({ error }));
};


exports.deleteComment = (req, res, next) => {
    console.log(req.params.id);
    Post.findOne({ where: {id: req.params.id}})
        .then(comment => {
            console.log(comment);
                Comment.destroy({ where: {id: req.params.id}})
                    .then(() => res.status(200).json({ message: 'Commentaire supprimée !'}))
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getAllCommentsOfPost = (req, res, next) => {
    const options = {
        where: { postId: req.query.postId },
        include: db.User,
        order: [['id', 'ASC']]
    }
    Comment.findAll(options)
        .then(comments => res.status(200).json({ comments }))
        .catch(error => res.status(404).json({ error }));
};

exports.getOneCommentOfPost = (req, res, next) => {
    Comment.findOne({ where: { id: req.params.id }})
        .then((comment) => res.status(200).json(comment))
        .catch(error => res.status(404).json({ error }));
}
