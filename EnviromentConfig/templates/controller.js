export function createController(arg, upperArg){
    const createNewController = `
    import ${upperArg}Service from '../services/${upperArg}Service.js'
    import jwt from 'jsonwebtoken'
    import { config } from 'dotenv'
    config()
    const db = new ${upperArg}Service()

    export class ${upperArg}Controller {
        async get(req, res){
            const relations = {} // Especifique as relações do modelo aqui ou deixe vazio. Ex {filhos: true, pets: true}
            try{
                const ${arg} = await db.get(relations)
                return res.send({
                    status: 200,
                    message: 'Buscar por ${arg}s',
                    message_code: '',
                    data: ${arg}
                })
            } catch (error) {
                return res.send({
                    status: 400,
                    message: 'Erro ao buscar por ${arg}s',
                    message_code: '',
                })
            }
        }
        async getById(req, res){
            const {id} = req.params
            const param = {id: Number(id)}
            const relations = {}
            try{
                const ${arg} = await db.getBy(param, relations)
                return res.send({
                    status: 200,
                    message: 'Buscar ${arg} pelo id',
                    message_code: '',
                    data: ${arg}
                })
            } catch (error) {
                return res.send({
                    status: 404,
                    message: 'Erro ao buscar ${arg} pelo id',
                    message_code: '',
                })
            }
        }
        async getByName(req, res){
            const {name} = req.params
            const param = {name: name}
            const relations = {}
            try{
                const ${arg} = await db.getBy(param, relations)
                return res.send({
                    status: 200,
                    message: 'Buscar por ${arg} pelo nome',
                    message_code: '',
                    data: ${arg}
                })
            } catch (error) {
                return res.send({
                    status: 404,
                    message: 'Erro ao buscar ${arg} pelo nome',
                    message_code: '',
                })
            }
        }
        async create(req, res){
            const body = req.body
            try{
                const ${arg} = await db.create(body)
                return res.send({
                    status: 201,
                    message: 'Criar ${arg}',
                    message_code: '',
                    data: ${arg}
                })
            } catch (error) {
                return res.send({
                    status: 400,
                    message: 'Erro ao criar ${arg}',
                    message_code: '',
                })
            }
        }
        async update(req, res){
            const {password} = req.body
            const {id} = req.params
            const param = {id: Number(id)}
            const ${arg} = {}
            try{
                const objReturn = await db.getBy(param)
                if(objReturn){
                    ${arg} = await db.update(password)
                }
                return res.send({
                    status: 200,
                    message: 'Alterar senha',
                    message_code: '',
                    data: ${arg}
                })
            } catch (error) {
                return res.send({
                    status: 400,
                    message: 'Pegar a mensagem do dicionário',
                    message_code: 'Erro ao alterar senha',
                })
            }
        }
        async delete(req, res){
            const {id} = req.params
            const param = {id: Number(id)}
            try{
                const objReturn = await db.getBy(param)
                if(objReturn){
                    await db.delete(param)
                }
                return res.send({
                    status: 204,
                    message: 'Deletar ${arg}',
                    message_code: '',
                })
            } catch (error) {
                return res.send({
                    status: 404,
                    message: 'Erro ao deletar ${arg}',
                    message_code: '',
                })
            }
        }

    }`
    return createNewController
}