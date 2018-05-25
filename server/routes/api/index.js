const router = require('express').Router();

router.use('/articles', require('./articles'));

module.exports = router;