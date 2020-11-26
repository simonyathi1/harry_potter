const Joi = require('@hapi/joi');

//Registration validation
const registerValidation = (data) =>{
    const validationSchema = {
        username: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    };
    return Joi.validate(data, validationSchema);
};

//Login validation
const loginValidation = (data) =>{
    const validationSchema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    };
    return Joi.validate(data, validationSchema);
};

module.exports.registerValidation =registerValidation;
module.exports.loginValidation =loginValidation;