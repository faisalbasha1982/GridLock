const express = require('express');
const router = express.Router();
const TodoList = require('../../models/TodoList');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');


// @route POST api/todo
// @desc Test route
// @access public
router.post('/',[auth, [
    check('status','status is required').not().isEmpty(),
    check('description','description is required').not().isEmpty(),
    check('title','title is required').not().isEmpty()
 ]
]
,
async (req,res)=> { 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await User.findById(req.user.id).select("-password");

        const newTodoList = new TodoList({
            status: req.body.status,
            description: req.body.description,
            title: req.body.title,
            user: req.user.id
        });

 
        const todo = await newTodoList.save();
        res.json(todo);

    }catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }


});

// @route GET api/todo
// @desc  Get all the todo list
// @access private
router.get('/',auth,async (req,res) => {

    try {
        const todolists =await TodoList.find().sort({date: -1});
        res.json(todolists);
    }catch(err){
        console.log(err.message);
        res.status(500).send("SERVER ERROR");
    }
});

// @route  GET api/todo/:id
// @desc   Get todolist by ID
// @access Private

router.get('/:id',auth,async (req,res) => {

    try {
        const todolist = await TodoList.findById(req.params.id);

        if(!post){
            return res.status(404).json({ msg: "No Todo List found!"});
        }
    
    }catch(err){
        console.error(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(404).json({ msg: "No Todo List found!"});
        }

        res.status(500).send("SERVER ERROR");
    }

})


module.exports = router;