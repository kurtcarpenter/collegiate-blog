'use strict'

const express = require('express')
const path = require('path')
const config = require('./config')
// const favicon = require('serve-favicon')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('winston')

const routes = require('./routes/index')
const posts = require('./routes/posts')

function initDatabase (mongoUri) {
  mongoose.connect(mongoUri, function (err) {
    if (err) {
      logger.error('Could not connect to the database.', {err: err})
    } else {
      logger.info('Successfully connected to the database.')
    }
  })
}
const mongoUri = 'mongodb://' +
  ((config.MONGO_USERNAME && config.MONGO_PASSWORD) ?
    config.MONGO_USERNAME + ':' + config.MONGO_PASSWORD + '@': '') +
  config.MONGO_HOST+ '/' +
  config.MONGO_DATABASE

initDatabase(mongoUri)

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(morgan('common'))

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
app.use('/posts', posts)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
