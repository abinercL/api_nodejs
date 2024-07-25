/* import { createServer } from 'node:http'


const server = createServer((request, response) => { //servidor criado, recebendo duas funçoes response e requeste
    response.write("Hello World")

    return response.end()
})
//sendo ouvido na porta 3333 
server.listen(3333) */

import { fastify } from "fastify";


const server = fastify()
//criando uma rota que permita criar
server.post('/videos', () => {
    return 'hello word'
})

//criando rota que permite pegar informaçoes por exemplo
server.get('/videos', () => {
    return 'hello playng'
})

//rota que me permite atualizar informaçoes via normalmente ID
//chamado de route parameter ex: ID
server.put('/videos/:id', () => {
    return 'hello play'
})

//rota na qual permite deletar uma escolha por vez por meio por exemplo de um ID
server.delete('/videos/:id', () => {
    return 'hello yng'
})
server.listen({
    port: 3333
})