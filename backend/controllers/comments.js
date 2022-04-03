const db = require('../models/index');

const { Comment } = db.sequelize.models;



exports.createComment = async (req, res, next) => {
    try {
        if (req.body.description !== "" && req.body.userId === req.token.userId) {
            await Comment.create({ ...req.body, postId: req.params.postId, userId: req.token.userId } ) 
            res.status(201).json({ message: 'Commentaire ajouté!'})
        } 
        else {
            throw "création de commentaire non autorisée";
        }
    } catch (error) {
        res.status(400).json({ message:error });
    }          
}

/* ---------- modification d'un commentaire ---------- */ 
exports.modifyComment = async (req, res, next) => {
    try {
        const comment = await Comment.findOne({ where: { id: req.params.commentId } })
        if (req.body.description !== "" && req.token.userId === comment.userId) {
            await comment.update(req.body, { where: { id: req.params.commentId } })
            res.status(200).json({ message: 'Commentaire modifié !'})  
        } else {
            throw "vous n'êtes pas autorisé à modifier ce commentaire" ;
        }
    } catch (error) {
        res.status(400).json({ error });
    }           
}


exports.deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findOne({ where: { id: req.params.commentId } })

        if (comment.userId === req.token.userId || req.token.isAdmin) {
            await comment.destroy({ where: { id: req.params.commentId } })
            res.status(200).json({ message: 'Commentaire supprimé !'})
        } else {
           throw "vous n'êtes pas autorisé à supprimer ce commentaire";
        }   
    } catch (error) {
        res.status(400).json({ error });
    }      
}


exports.getAllCommentsOfPost = (req, res, next) => {
    const options = {
        where: { postId: req.params.postId },
        include: db.User,
        order: [['id', 'ASC']]
    }

    if (req.query.limit) {
        options.order = [['id', 'ASC']];
        options.limit = parseInt(req.query.limit);
    }
   
    Comment.findAndCountAll(options)
        .then(comments => res.status(200).json({ comments }))
        .catch(error => res.status(404).json({ error }));
}

exports.getOneCommentOfPost = (req, res, next) => {
    Comment.findOne({ where: { postId: req.params.postId, id: req.params.commentId } , include: db.User })
        .then(comment => res.status(200).json({ comment }))
        .catch(error => res.status(404).json({ error }));
}