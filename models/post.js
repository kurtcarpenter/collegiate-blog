var mongoose = require('mongoose')
var Schema = mongoose.Schema
var logger = require('winston')

var postSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  body: {type: String, required: true},
  date: {type: Date, required: true}
})
postSchema.set('toObject', { versionKey: false })
var Post = mongoose.model('post', postSchema)

exports.create = function (title, author, body) {
  var post = new Post({
    title: title,
    author: author,
    body: body,
    date: new Date()
  })
  post.save(function (err, resp) {
    if (err) {
      logger.warn(err)
    } else {
      logger.info('Successfully created post')
    }
  })
}

exports.read = function (id, success, failure) {
  Post.findOne({_id: id}, function (err, post) {
    if (err) {
      failure(err)
    } else {
      success(post)
    }
  })
}

exports.update = function () {}

exports.delete = function () {}

exports.all = function () {}
