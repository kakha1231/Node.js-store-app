const express = require('express')
const prisma = require("../client/prisma")
const {productvalidator} = require("../validators/product")
const {authmiddleware} = require("../middleware/jwt")
const {validationResult} = require('express-validator')

const Router = express.Router()


Router.get('/', authmiddleware, async (req,res)=>{
 const porducts = await prisma.Products.findMany({where : {ownerid : req.user.id}})
return res.json({data : porducts})
})


Router.post('/',authmiddleware,productvalidator, async (req, res) => {
 const error = validationResult(req)
  if(!error.isEmpty()){
 return res.status(400).json({error: error})
}
    try{
       const product = await prisma.Products.create({ data: {
        name : req.body.name, 
        ownerid : Number(req.user.id) ,
        price : req.body.price  
     } })
    return res.json({product: product})
         }
    
         catch(error) {
        return res.json({error: error})
    }
});


Router.delete('/:id',authmiddleware, async (req, res) =>{
const id = req.params.id
try { 
    const products = await prisma.Products.findMany({where : {ownerid : req.user.id}})
    if(products.id= Number(id)){
  const producttodelete =  await prisma.Products.delete({where: { id : Number(id) }})
  return res.json({data :producttodelete})
} 
return res.status(403).json({error : "invalid product id"})
}
catch(err){
    return res.status(400).json({error : err})   }
})

module.exports = Router;