const pet = require("./models")
module.exports = {
    all: function(req,res){
        pet.find({}).sort({type:1})
            .then(data=>res.json({data}))
            .catch(err=>res.json(err))      
    },
    create: function(req,res){
        pet.create(req.body)
            .then(data=>res.json(data))
            .catch(err=>res.json(err)) 
    },
    getOne: function(req,res){
        pet.findById(req.params.id)
            .then(data=>res.json(data))
            .catch(err=>res.json(err)) 
    },
    update: function(req,res){
        pet.findByIdAndUpdate(req.params.id, req.body)
        .then(data=>res.json(data))
        .catch(err=>res.json(err)) 
    },
    delete: function(req,res){
        pet.findByIdAndDelete(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err)) 
    },
    like: function(req,res){
        pet.findByIdAndUpdate({_id:req.params.id},
            {$inc:{likes:1}})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
    }
}