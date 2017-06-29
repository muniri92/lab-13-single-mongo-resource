'use strict';

const faker = require('faker');
const Student = require('../../model/student.js');

const mockStudent = module.exports = {};

mockStudent.createOne = () => {
  return new Student({
    name: faker.name.findName(),
    studentId: faker.random.number(),
    class: 401,
    grade: 89,
    gender: 'female',
    race: 'yapanese',
  });
};
