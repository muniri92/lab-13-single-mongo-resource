'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const studentRouter = require('../route/student_router.js');

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI);

let server;
const app = express();

app.use(studentRouter);

const serverControl = module.exports = {};

serverControl.start = () => {
  return new Promise((resolve, reject) => {
    if (!server || !server.isOn) {
      server = app.listen(process.env.PORT, () => {
        console.log('server up :: ', process.env.PORT);
        server.isOn = true;
        resolve();
      });
      return;
    }
    reject();
  });
};

serverControl.stop = () => {
  return new Promise((resolve, reject) => {
    if (server && server.isOn) {
      server.close(() => {
        console.log('server down');
        server.isOn = false;
        resolve();
      });
      return;
    }
    reject();
  });
};
