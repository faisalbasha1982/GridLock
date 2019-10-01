const express = require('express');
const router = express.Router();

// @route GET api/todo
// @desc Test route
// @access public
router.get('/',(req,res)=> { res.send('todo Route')});

module.exports = router;