export function createRepository(arg, upperArg) {
    const createNewRepository = 
`import { ${upperArg} } from '../../entities/${upperArg}.js'
import { AppDataSource } from "../connection.js"

export const ${arg}Repository = AppDataSource.getRepository(${upperArg})`
    return createNewRepository
}