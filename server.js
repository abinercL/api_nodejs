/* import { createServer } from 'node:http'


const server = createServer((request, response) => { //servidor criado, recebendo duas funçoes response e requeste
    response.write("Hello World")

    return response.end()
})
//sendo ouvido na porta 3333 
server.listen(3333) */

import { fastify } from "fastify";


const server = fastify()

server.get('/', () => {
    return 'hello word'
})
server.listen({
    port: 3333
})