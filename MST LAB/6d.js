const http=require("http")
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.end(`<h1>Updated Server from Node js</h1>`);
})
server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000/server");
}) 
