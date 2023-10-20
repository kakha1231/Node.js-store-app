const {checkSchema} = require("express-validator")

const signupvalidator = checkSchema({
  username :{
    in : 'body',
    isEmpty : false,
    isString : true,
    isLength:{
        oprions :{
            minLength : 2
        }
    }
  },
    firstname : {
        in : 'body',
    isEmpty : false,
    isString : true,
    isLength:{
        oprions :{
            minLength : 2
        }
    }
    },

     lastname : {
    in : 'body',
    isEmpty : false,
    isString : true,
    isLength:{
        oprions :{
            minLength : 2
        }
    }
   },
     password : {
        in : 'body',
        isEmpty : false,
        isString : true,
        isLength: {
            options : {
                minLength : 6
            }
        }
     },
      age : {
        in : 'body',
       isEmpty : false
      }
})

const signinvalidator = checkSchema({
  username :{
    in : 'body',
    isEmpty : false,
    isString : true
  },
  password : {
    in : 'body',
    isEmpty : false,
    isString : true,
    }
 })

module.exports = {signupvalidator, signinvalidator}