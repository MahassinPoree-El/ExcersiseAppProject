const express = require('express');
const {User, Tracker} = require('./model');

var trackSesh = new Tracker();

const app = express.Router();