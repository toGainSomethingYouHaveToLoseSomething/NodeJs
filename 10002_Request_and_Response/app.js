const http = require('http')

const server = http.createServer((req,res)=>{
  console.log(req.url, '\n', req.method , '\n', req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Learning Backend</title></head>')
  res.write('<body><h1>Respons From Server</h1></body>')
  res.write('</html>')
  res.end()
  return
})

const PORT = 3000
server.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`)
})