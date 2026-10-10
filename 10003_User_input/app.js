const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Learning Backend</title></head>')
    res.write('<body>')
    res.write('<h1>Respons From Server</h1>')

    res.write('<form action="/submit-details" method="POST">')
    res.write('<input type="text" name="username" placeholder="enter your name"><br>')
    res.write('<label for="male"> Male </label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female"> Female </label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<input type="submit" value="sumbit"/>')
    res.write('</form>')

    res.write('</body>')
    res.write('</html>')
    return res.end() 
  }
  else if(req.url.toLocaleLowerCase() === '/submit-details' && req.method==='POST'){
    fs.writeFileSync('user.txt', 'M.Seyam')
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }
  else{
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Learning Backend</title></head>')
    res.write('<body><h1>404 Page Not Found</h1></body>')
    res.write('</html>')
    return res.end()
  }
  
})

const PORT = 3000
server.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`)
})