'use strict'
const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const logger = require('winston')

router.post('/add', function (req, res) {
  logger.info('Received' + req.body)
  Post.create(req.body.title, req.body.author, req.body.body,
    function (resp) {
      res.status(201).send()
    }, function (err) {
      logger.warn(err)
      res.status(500).send()
    })
})

router.get('/all', function (req, res) {
  Post.all(
    function (posts) {
      res.send(posts)
    }, function (err) {
      logger.warn(err)
      res.status(500).send()
    })
})

router.get('/:id', function (req, res) {
  Post.read(req.params.id, function (post) {
    res.send(post)
  }, function (err) {
    logger.warn(err)
    res.render('error', { message: '404', error: { status: 'Page not found' } })
  })
})

router.put('/:id', function (req, res) {
  Post.update(req.params.id, req.body.title, req.body.author, req.body.body,
    function (resp) {
      res.status(201).send()
    }, function (err) {
      logger.warn('Failed to update: ' + req.params.id + ' with ' + err)
      res.status(404).send()
    })
})

router.delete('/:id', function (req, res) {
  Post.delete(req.params.id, function () {
    res.status(200).send()
  }, function (err) {
    logger.warn('Failed to delete: ' + req.params.id + ' with ' + err)
    res.status(404).send()
  })
})

module.exports = router
