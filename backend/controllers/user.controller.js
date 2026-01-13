const userServices = require('../services/user.services');

exports.register = async(req,res,next)=>{
    try{
        const {email,password} = req.body; 

        const successResponse = await userServices.userRegistration(email,password);

        res.json({
            status:true,
            success:"user registered successfully",
        });
    }
    catch(err){
        throw err;
        
    }
};

