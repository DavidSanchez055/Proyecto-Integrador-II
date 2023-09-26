const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(80,()=> {
    console.log("Server up, Port: ",80);
});