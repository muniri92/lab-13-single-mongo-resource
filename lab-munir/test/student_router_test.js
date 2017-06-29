'use strict';

// npm modules
require('dotenv').config({ path: `${__dirname}/../.test.env` });
const superagent = require('superagent');
const expect = require('expect');

// app modules
const server = require('../lib/server.js');
const mockStudent = require('./lib/mock_student.js');

// const module = require('module');

describe('test student routes', () => {
  before(server.start);
  after(server.stop);

  describe('test POST /api/student', () => {

    let tempStudent = mockStudent.createOne();
    it('should respond 200 status', () => {
      console.log(tempStudent);
      return superagent.post(`${process.env.API_URL}/api/student`)
      .send(tempStudent)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.name).toEqual(tempStudent.name);
      });
    });

    it('should respond with 409', () => {
      return superagent.post(`${process.env.API_URL}/api/student`)
      .send(tempStudent)
      .catch((res) => {
        expect(res.status).toEqual(409);
      });
    });

  });

});
