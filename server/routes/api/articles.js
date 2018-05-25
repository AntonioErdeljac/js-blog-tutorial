const mongoose = require('mongoose');
const router = require('express').Router();
const Articles = mongoose.model('Articles');

router.post('/', (req, res, next) => {
  const { body } = req;

  if(!body.title) {
    return res.status(422).json({
      errors: {
        title: 'is required',
      },
    });
  }

  if(!body.author) {
    return res.status(422).json({
      errors: {
        author: 'is required',
      },
    });
  }

  if(!body.description) {
    return res.status(422).json({
      errors: {
        description: 'is required',
      },
    });
  }

  const finalArticle = new Articles(body);
  return finalArticle.save()
    .then(() => res.json({ article: finalArticle.toJSON() }))
    .catch(next);
});

router.get('/', (req, res, next) => {
  return Articles.find()
    .then((articles) => res.json({ articles: articles.map(article => article.toJSON()) }))
    .catch(next);
});

router.param('id', (req, res, next, id) => {
  return Articles.findById(id, (err, article) => {
    if(err) {
      return res.sendStatus(404);
    } else if(article) {
      req.article = article;
      return next();
    }
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  return res.json({
    article: req.article.toJSON(),
  });
});

router.patch('/:id', (req, res, next) => {
  const { body } = req;

  if(typeof body.title !== 'undefined') {
    req.article.title = body.title;
  }

  if(typeof body.author !== 'undefined') {
    req.article.author = body.author;
  }

  if(typeof body.description !== 'undefined') {
    req.article.description = body.description;
  }

  return req.article.save()
    .then(() => res.json({ article: req.article.toJSON() }))
    .catch(next);
});

module.exports = router;