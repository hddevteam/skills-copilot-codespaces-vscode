// create web server
const express = require('express');
const router = express.Router();
// create a new comment
router.post('/', (req, res) => {
  const comment = new Comment({
    text: req.body.text,
