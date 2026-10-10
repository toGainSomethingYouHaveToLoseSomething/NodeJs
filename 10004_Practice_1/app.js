const http = require('http')

function fun(title,res){
  res.setHeader('Content-Type','text/html')

    res.write('<html>')
    res.write('<head><title>Learning Backend</title></head>')
    res.write('<body>')
    res.write(`<h1>${title}</h1>`)

    res.write(`<a href="http://localhost:${PORT}/">Home </a>`)
    res.write(`<a href="http://localhost:${PORT}/men">Men </a>`)
    res.write(`<a href="http://localhost:${PORT}/women">Women </a>`)
    res.write(`<a href="http://localhost:${PORT}/kids">Kids </a>`)
    res.write(`<a href="http://localhost:${PORT}/cart">Cart </a>`)

    res.write('</body>')
    res.write('</html>')
    return res.end()
}


const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    fun('Home',res)
  }else if(req.url === '/men'){
    fun('Men',res)
  }else if(req.url === '/women'){
    fun('Women',res)
  }else if(req.url === '/kids'){
    fun('Kids',res)
  }else if(req.url === '/cart'){
    fun('Cart',res)
  }else {
    res.statusCode = 302
    res.setHeader('Location', '/')
  }

})


const PORT = 3000
server.listen(PORT,()=>{
  console.log( `server is running on http://localhost:${PORT}`)
})