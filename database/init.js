const mongoose = require('mongoose');


module.exports = function()
{
mongoose.connect('mongodb+srv://bharti:bharti@cluster-ecom.qejmziu.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true })
.then(function()
{
  console.log("connected DB")
})
.catch(function()
{
  console.log("error connecting to DB")
})
}
