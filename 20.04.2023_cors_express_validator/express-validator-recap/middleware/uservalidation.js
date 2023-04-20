import {body, validationResult} from 'express-validator';


export const validateUser = [
    body('firstname')
    .exists()
    .trim()
    .isAlpha('fr-FR','de-DE','en-US').withMessage('firstname should contain only letters')
    .isLength({min:1, max:50}).withMessage('firstname should not be empty, should be more than one and less than 50 characters')
    ,
    function(req, res, next){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({titel:'Validation errors firstname', error:errors})
        }

        next();
    },
    body('lastname')
    .exists()
    .trim()
    .isAlpha('fr-FR','de-DE', 'en-US').withMessage('lastname should contain only letters')
    .isLength({min:1, max:50}).withMessage('lastname should not be empty, should be more than one and less than 50 characters')
    ,
    function(req, res, next){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({titel:'Validation errors lastname', error:errors})
        }

        next();
    },
    body('email')
    .exists()
    .trim()
    .isEmail().withMessage('This is not a valid email'),
    function(req, res, next){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({titel:'Validation errors email', error:errors})
        }

        next();
    },
    body('phone')
    .exists()
    .trim()
    .isMobilePhone(['de-DE']).withMessage('This is not a valid phone number'),
    function(req, res, next) {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({titel:'Validation errors mobile phone', error:errors})
        }

        next();
    }
]

/**
 * Array to sanitize user
 */
export const sanitizeUser = [
    body('email').normalizeEmail()
]

export default {validateUser, sanitizeUser}