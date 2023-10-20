const {checkSchema} = require('express-validator')

const productvalidator = checkSchema({
name : {
    in: 'body',
    isEmpty : false,
    isString : true,
    isLength : {options:{
       min :2
    }}
  },
 price :{
     in : 'body',
     isEmpty : false,
     isNumeric : {
         minValue: 10
     }
 }

})

module.exports = {productvalidator}