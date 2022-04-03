const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');


const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');


router.post('/', auth, postsCtrl.createPost);
router.put('/:id', auth, postsCtrl.modifyPost);
router.delete('/:id', auth, postsCtrl.deletePost);
router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);


module.exports = router;