// validations
const Joi = require('@hapi/joi');


// reg validation
const RegisterValidation = (data) =>{


    const schema = Joi.object().keys({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

   return schema.validate(data);

}


// log validation
const LoginValidation = (data) =>{



    const schema = Joi.object().keys({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

   return schema.validate(data);

}

module.exports.RegisterValidation = RegisterValidation;
module.exports.LoginValidation = LoginValidation;