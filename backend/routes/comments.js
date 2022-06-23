const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');


router.post('/', auth, commentsCtrl.createComment);
router.put('/:id', auth, commentsCtrl.modifyComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);
router.get('/:postId', auth, commentsCtrl.getAllCommentsOfPost);
router.get('/single/:id', auth, commentsCtrl.getOneCommentOfPost);



module.exports = router;

