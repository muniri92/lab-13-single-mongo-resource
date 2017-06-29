'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();

const Student = require('../model/student.js');

let studentRouter = module.exports = new Router();

studentRouter.post('/api/student', jsonParser,(req, res, next) => {
  console.log('hit POST /api/student');

  return new Student(req.body)
  .save()
  .then(student => res.json(student))
  .catch(next);
});
