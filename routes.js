const controller = require("./controller");
var path = require('path');
module.exports = function(app){
    app.post('/pets', controller.create)
    app.get('/pets', controller.all)
    app.get('/pets/:id', controller.getOne)
    app.put('/pets/:id', controller.update)
    app.patch('/pets/:id', controller.like)
    app.delete('/pets/:id', controller.delete)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("public/dist/public/index.html"))
    });
}