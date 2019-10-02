const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile  = require('../../models/Profile');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator/check');

// @route  GET api/profile/me
// @desc   GET current users profile
// @access Private
router.get('/me',auth,async (req,res)=> { 
    try {
            const profile = await Profile.findOne({ user: req.user.id}, populate('user',['name','avatar']));
        if(!profile) {
            return res.status(400).json({ msg:'No Profile for this user' })
        }
        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// @route  POST api/profile
// @desc   Create pr update user profile
// @access Private

router.post('/',[auth,[
        check('todolist','tasks is required').not().isEmpty(),
    ]],
  async  (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }

    const {
        todolist
    } = req.body;

    // build profile object
    const profileFields = { todolist:[] };

    profileFields.user = req.user.id;
    var parsedJSON = JSON.parse(JSON.stringify(todolist));

    parsedJSON.map((item) => {
        profileFields.todolist.push({ title: item.title, description: item.description, status: item.status});
    });

    try {

        let profile = Profile.findOne({
            user: req.user.id,
        });

        if(profile) {
            profile = await Profile.findOneAndUpdate(
                {user: req.user.id},
                { $set: profileFields},
                { new: true}
            );

            return res.json(profile);
        }

        // Create 
        profile = new Profile(profileFields);
        await profile.save();
        console.log(profile);
        res.json(profile);

    }catch(error){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;