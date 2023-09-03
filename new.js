const fs = require('fs');
const t1 = performance.now();
fs.readFile('first.js','utf-8',(err,txt)=>{
    console.log(err);
});