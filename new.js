const fs = require('fs');
fs.readFile('first.js','utf-8',(err,txt)=>{
    console.log(err);
});