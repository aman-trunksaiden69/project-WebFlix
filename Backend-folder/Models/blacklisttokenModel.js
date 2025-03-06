const mongoose = require('mongoose');

//TTL- time to live
//Blacklist Token Schema Model-
const blacklistTokenSchema = new mongoose.Schema({

    token: {
        type: String,
        required: true,
        unique: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400, // this is the expiry time 24hrs in seconds
    },

});

//Blacklist Token Model-
const blacklistTokenModel = mongoose.model('blacklistToken', blacklistTokenSchema);


module.exports = blacklistTokenModel;