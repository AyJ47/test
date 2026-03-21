const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        return res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.write('welcome to our about page')
        return res.end()
    }
    res.end(`<h1>oops cant find it mate</h1>
        <a href="/">back home`)
    
})

server.listen(5000)