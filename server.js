import { fastify } from "fastify";
import { DatabaseMemory } from "./database_memory.js";

const server = fastify()

const database = new DatabaseMemory()

//criando uma rota que permita criar
server.post('/videos', (request, reply) => {
    database.create({
        title: 'Video o1',
        description: 'Esse é o video 01',
        duration: 180,
    })
    return reply.status(201).send()
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