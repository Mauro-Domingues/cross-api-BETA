export function createService(arg, upperArg){
    const createNewService =
`import { ${arg}Repository } from '../database/repositories/${arg}Repository.js'

export class ${upperArg}Service{
    async get(relations){
        try{
            const ${arg} = await ${arg}Repository.find(relations)
            return ${arg}
        } catch (error) {
            return {message: error.message}
        }
    }
    async getBy(param, relations){
        try{
            const ${arg} = await ${arg}Repository.findBy(param, relations)
            return ${arg}
        } catch (error) {
            return {message: error.message}
        }
    }
    async create(body){
        try{
            const ${arg} = await ${arg}Repository.save(body)
            return ${arg}
        } catch (error) {
            return {message: error.message}
        }
    }
    async update(body, param){
        try{
            const ${arg} = await ${arg}Repository.update(param, body)
            return ${arg}
        } catch (error) {
            return {message: error.message}
        }
    }
    async delete(param){
        try{
            await ${arg}Repository.delete(param)
            return {message: deleted}
        } catch (error) {
            return {message: error.message}
        }
    }
}`
    return createNewService
}