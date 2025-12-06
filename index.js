import http from 'http'
const server = http.createServer((req,res)=> {
    res.writeHead(200,{"content-type" : "text/plain"});
    res.end("Hello Varnikaaaaahh!!");
});

server.listen(8000,()=>{
    console.log("pani chestundi roi");
});