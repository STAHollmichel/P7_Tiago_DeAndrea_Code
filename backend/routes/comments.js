const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');


router.post('/', auth, commentsCtrl.createComment);
router.put('/:id', auth, commentsCtrl.modifyComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);
router.get('/', auth, commentsCtrl.getAllCommentsOfPost);
router.get('/:id', auth, commentsCtrl.getOneCommentOfPost);

// router.post('/:postId', auth, commentsCtrl.createComment);
// router.put('/:commentId', auth, commentsCtrl.modifyComment);
// router.delete('/:commentId', auth, commentsCtrl.deleteComment);
// router.get('/post/postId', auth, commentsCtrl.getAllCommentsOfPost);
// router.get('/:commentId', auth, commentsCtrl.getOneCommentOfPost);

module.exports = router;

