'use strict'

const env = process.env.NODE_ENV || 'local'
const credentials = require('./credentials')

const variables = {

}

function setVariables () {
  for (let key in variables) {
    let values = constiables[key]
    exportVar(key, values)
  }
  for (let key in credentials) {
    let values = credentials[key]
    exportVar(key, values)
  }
}

function exportVar (name, values) {
  exports[name] = values[env]
}

setVariables()
