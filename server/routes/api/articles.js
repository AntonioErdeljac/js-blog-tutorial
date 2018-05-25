const mongoose = require('mongoose');
const router = require('express').Router();
const Articles = mongoose.model('Articles');

router.post('/articles', (req, res, next) => {
  const { article } = req.body;

  if(!article.title) {
    return res.status(422).json({
      errors: {
        title: 'is required',
      },
    });
  }

  if(!article.author) {
    return res.status(422).json({
      errors: {
        author: 'is required',
      },
    });
  }

  if(!article.description) {
    return res.status(422).json({
      errors: {
        description: 'is required',
      },
    });
  }

  const finalArticle = new Articles(article);
  return finalArticle.save()
    .then(() => res.json({ article: finalArticle.toJSON() }))
    .catch(next);
});

router.get('/articles', (req, res, next) => {
  return Articles.find()
    .then((articles) => res.json({ articles: articles.map(article => article.toJSON()) }))
    .catch(next);
});

module.exports = router;