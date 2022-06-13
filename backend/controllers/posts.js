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
    Post.findAll({
        order: [[
            "createdAt", "DESC"
        ]]})
        .then((posts) => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({ where: {id: req.params.id }})
        .then((post) => res.status(200).json(post))
        .catch(error => res.status(400).json({ error }));
};

exports.userLikePost = (req, res, next) => {

    let like = req.body.like 
    let userId = req.body.userId 
    let postId = req.params.id 
    if (like === 1) { 
      Post.updateOne(
        {_id: postId}, 
        {
            $push: {usersLiked : userId},
            $inc: {likes: 1}
        }) 
  
        .then(() => res.status(200).json({ message: 'Vous aimez cette post !!!'}))
        .catch(error => res.status(400).json({ error }));
    }

    //Annulation d'un like ou dislike
    if (like === 0) { 
      Sauce.findOne({_id: postId})  
        .then((post) => {
          //Si l'utilisateur annule un like
          if (sauce.usersLiked.find(user => user === userId)) { 
            Sauce.updateOne(
              {_id: postId},
              { $pull: { usersLiked: userId},
                $inc: { likes: -1 }
              })
  
              .then(() => res.status(200).json({ message: 'Votre avis a été annulé'}))
              .catch(error => res.status(400).json({ error }));
          }
        })
        .catch((error) => res.status(404).json({ error }))
  
    }
  
  };