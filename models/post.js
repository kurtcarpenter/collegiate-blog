var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  body: {type: String, required: true},
  date: {type: Date, required: true}
})
postSchema.set('toObject', { versionKey: false })
var Post = mongoose.model('post', postSchema)

exports.create = function (title, author, body, success, failure) {
  var post = new Post({
    title: title,
    author: author,
    body: body,
    date: new Date()
  })
  post.save(function (err, resp) {
    if (err) {
      failure(err)
    } else {
      success(resp)
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

exports.all = function (success, failure) {
  Post.find({}, function (err, posts) {
    if (err) {
      failure(err)
    } else {
      success(posts)
    }
  })
}

exports.update = function (id, title, author, body, success, failure) {
  Post.findOne({ _id: id }, function (err, post) {
    if (err) {
      failure(err)
    } else {
      post.title = title
      post.author = author
      post.body = body
      post.date = new Date()
      post.save(function (err, post) {
        if (err) {
          failure(err)
        } else {
          success(post)
        }
      })
    }
  })
}

exports.delete = function (id, success, failure) {
  Post.remove({_id: id}, function (err, resp) {
    if (resp.result.n === 0) {
      failure(err)
    } else if (err) {
      failure(err)
    } else {
      success()
    }
  })
}
