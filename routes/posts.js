var express = require('express')
var router = express.Router()
var Post = require('../models/post')
var logger = require('winston')

router.post('/add', function (req, res) {
  logger.info('Received' + req.body)
  Post.create(req.body.title, req.body.author, req.body.body)
  res.status(200).send()
})

router.get('/all', function (req, res) {
  res.status(500)
})

router.get('/:id', function (req, res) {
  Post.read(req.params.id, function (post) {
    res.render('post', {
      title: post.title,
      author: post.author,
      date: post.date,
      body: post.body})
  }, function (err) {
    res.render('error', { message: '404', error: { status: 'Page not found' } })
    logger.warn(err)
  })
})

module.exports = router
