const db = require('../models/index');

const { Post, User } = db.sequelize.models;

const fs = require('fs');

exports.createPost = async (req, res, next) => {
  console.log(req.body);
  const newPost = new Post({
    ...req.body,
    userId: req.auth.userId,
    userLike: 0,
    usersLiked: JSON.stringify([]),
    postPhoto: req.file
      ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      : null,
  });
  newPost
    .save()
    .then(() => res.status(201).json({ message: 'Post enregistrée !' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyPost = (req, res, next) => {
  const updatePost = req.file
    ? {
        ...req.body,
        postPhoto: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      if (req.file) {
        const filename = post.postPhoto.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {});
      }

      Post.update({ ...updatePost }, { where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'Post modifiée !' }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));

  console.log(updatePost);
};

exports.deletePost = (req, res, next) => {
  console.log(req.params.id);
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      console.log(post);

      if (post.postPhoto) {
        const filename = post.postPhoto.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Post.destroy({ where: { id: req.params.id } })
            .then(() => res.status(200).json({ message: 'Post supprimée !' }))
            .catch((error) => res.status(400).json({ error }));
        });
      } else {
        Post.destroy({ where: { id: req.params.id } })
          .then(() => res.status(200).json({ message: 'Post supprimée !' }))
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
};

exports.getAllPosts = (req, res, next) => {
  Post.findAll({
    order: [['createdAt', 'DESC']],
    include: User,
  })
    .then((posts) => {
      console.log(posts);
      res.status(200).json(posts);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(400).json({ error }));
};

exports.userLikePost = (req, res, next) => {
  const { postId } = req.params;
  const { userId } = req.auth;

  Post.findOne({ where: { id: postId } })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: 'Post introuvable' });
      }

      console.log('post.likes', post.userLike);

      let newUsersLiked = [];
      let newLikes = post.userLike;

      if (!post.usersLiked.length) {
        newUsersLiked.push(userId);
        newLikes = newLikes + 1;
      } else {
        newUsersLiked = JSON.parse(post.usersLiked);

        if (!newUsersLiked.includes(userId)) {
          newUsersLiked.push(userId);
          newLikes = newLikes + 1;
        } else {
          newUsersLiked = newUsersLiked.filter((el) => el !== userId);
          newLikes = newLikes - 1;
        }
      }

      console.log('newLikes', newLikes);

      Post.update(
        { userLike: newLikes, usersLiked: JSON.stringify(newUsersLiked) },
        { where: { id: postId } }
      )
        .then(() => {
          res.status(201).json({ message: 'ok' });
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({ err });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};