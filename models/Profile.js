const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    
});

const User = mongoose.model('user', profileSchema);

module.exports = User;