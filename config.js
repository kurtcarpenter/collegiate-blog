var env = process.env.NODE_ENV || 'development'
var credentials = require('./credentials')

var variables = {
}

function setVariables () {
  for (var key in variables) {
    var values = variables[key]
    exportVar(key, values)
  }
  for (key in credentials.variables) {
    values = credentials.variables[key]
    exportVar(key, values)
  }
}

function exportVar (name, values) {
  // Take the value designated for this environment.
  // If that variable doesn't exist, fall back to the dev value.
  // If we're in prod, throw an error instead of silently falling back.
  if (env === 'development') {
    exports[name] = values['dev']
  }
}

setVariables()
