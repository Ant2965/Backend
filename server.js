const http = require('http');
const server = http.createServer((req,res)=>{
console.log('SERVER ONNNNNN')
res.end('hellllllllllllooooooooooooooooooooooo');
})

server.listen(8069)
