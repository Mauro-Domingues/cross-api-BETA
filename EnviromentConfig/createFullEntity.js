import fs from 'fs'
import { createModel } from './templates/model.js'
import { createRepository } from './templates/repository.js'
import { createService } from './templates/service.js'
import { createController } from './templates/controller.js'
import { createRoute } from './templates/route.js'

const [upperEntityName] = process.argv.slice(2)
const entityName = `${upperEntityName.charAt(0).toLowerCase()}${upperEntityName.slice(1)}`

const createFullEntity = () => {
    const newModel = `${createModel(entityName, upperEntityName)}`
    const newRepository = createRepository(entityName, upperEntityName)
    const newService = createService(entityName, upperEntityName)
    const newControler = createController(entityName, upperEntityName)
    const newRoute = createRoute(upperEntityName)
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
    if (!fs.existsSync(`src/controllers/${upperEntityName}Controller.js`)) {
        fs.appendFile(`src/controllers/${upperEntityName}Controller.js`, newControler, (err) => {
            if (err) throw err
            console.log(`${upperEntityName}Controller.js criado`)
        })
    }
    if (!fs.existsSync(`src/routes/${entityName}Routes.js`)) {
        fs.appendFile(`src/routes/${entityName}Routes.js`, newRoute, (err) => {
            if (err) throw err
            console.log(`${entityName}Routes.js criado`)
        })
    }
}; createFullEntity()