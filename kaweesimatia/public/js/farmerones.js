var x = document.getElementById("count");   // Get the element with id="demo"
const farmerCount = require('../../models/agricOfficerModel')
x = farmerCount.countDocuments()
console.log(x)