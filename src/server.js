'use strict'

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator.js')
const error404 = require('./errors-handlers/404.js')
const error500 = require('./errors-handlers/500.js')
const supertest = 
app.use(express.json());

app.use(logger);
app.get('/person', validator, handlePerson)

function handlePerson(request, response){
  let name =request.query
  response.send(name);
}


app.use('*',error404);
app.use(error500);

module.exports = {
  app,
  start:port=>{ app.listen(port, () => console.log('Server is up')),port
}}