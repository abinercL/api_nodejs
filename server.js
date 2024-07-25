import { fastify } from "fastify";
import { DatabaseMemory } from "./database_memory.js";

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