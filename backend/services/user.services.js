const userModel = require('../models/user.model');

class userServices {
    static async userRegistration(email,password){
        try{
            const createUser = new userModel({email,password});
            return createUser.save();
        }catch(err){
            throw(err)
        }
    }
}

module.exports = userServices;

