
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const User=require('../models/user')
// users hardcoded for simplicity, store in a db for production applications

module.exports = {
    authenticate
};

async function authenticate({ username,email, password1 }) {
  
    user=await User.findOne({email,password1});                            
                    const token = jwt.sign({ id: user._id },config.secret);
                    const { password, ...userWithoutPassword } = user._doc;              
                    return { ...userWithoutPassword, token };
}
