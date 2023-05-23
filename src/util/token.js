const jwt = require('jsonwebtoken');
const { set } = require('../api');

const checkToken = async (token, id, key) => jwt.verify(token, key, (err, decoded) =>{

});

const setToken = async (id, key) => {
    console.log(id);
    if(id){
        return jwt.sign({id }, key, { expiresIn: 28000});
    }
    return false;
};

module.exports = {
    checkToken;
    setToken;
};