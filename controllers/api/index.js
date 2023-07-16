const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes.js');
const commentRoutes = require('./commentRoutes.js');
// api/users
router.use('/users', userRoutes);
// api/posts
router.use('/posts', postRoutes);
// api/commets
router.use('/comments', commentRoutes)

module.exports = router;
