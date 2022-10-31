import fs from 'fs'
import { createModel } from './templates/model.js'
import { createRepository } from './templates/repository.js'
import { createService } from './templates/service.js'

const [upperEntityName] = process.argv.slice(2)
const entityName = `${upperEntityName.charAt(0).toLowerCase()}${upperEntityName.slice(1)}`

const createEntity = () => {
    const newModel = `${createModel(entityName, upperEntityName)}`
    const newRepository = createRepository(entityName, upperEntityName)
    const newService = createService(entityName, upperEntityName)
    if (!fs.existsSync(`src/entities/${upperEntityName}.js`)) {
        fs.appendFile(`src/entities/${upperEntityName}.js`, newModel, (err) => {
            if (err) throw err
            console.log(`${upperEntityName}.js criado`)
        })
    }
    if (!fs.existsSync(`src/database/repositories/${entityName}Repository.js`)) {
        fs.appendFile(`src/database/repositories/${entityName}Repository.js`, newRepository, (err) => {
            if (err) throw err
            console.log(`${entityName}Repository.js criado`)
        })
    }
    if (!fs.existsSync(`src/services/${upperEntityName}Service.js`)) {
        fs.appendFile(`src/services/${upperEntityName}Service.js`, newService, (err) => {
            if (err) throw err
            console.log(`${upperEntityName}Service.js criado`)
        })
    }
}; createEntity()