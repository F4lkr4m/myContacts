const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.use((req, res, next) => {
  if (req.path === '/signup') { 
    res.sendStatus(201); 
  } else if (req.path === '/signin') {
    res.sendStatus(200);
  } else {
    next();
  }
  
 })

server.listen(3004, () => {
  console.log('JSON Server is running')
});