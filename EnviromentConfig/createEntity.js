import fs from 'fs'
import { createModel } from './templates/model.js'
import { createRepository } from './templates/repository.js'
import { createService } from './templates/service.js'
import { createController } from './templates/controller.js'
import { createRoute } from './templates/route.js'

let entityName = ''
process.argv.forEach((val, index) => {
    entityName = `${val}`
    entityName.toLowerCase()
    return entityName
})

const createEntity = () => {
    const upperEntityName = `${entityName.charAt(0).toUpperCase()}${entityName.slice(1)}`
    const newModel = createModel(entityName, upperEntityName)
    const newRepository = createRepository(entityName, upperEntityName)
    const newService = createService(entityName, upperEntityName)
    const newControler = createController(entityName, upperEntityName)
    const newRoute = createRoute(upperEntityName)
    fs.appendFile(`src/entities/${upperEntityName}.js`, newModel, (err) => {
        if (err) throw err
        console.log(`${upperEntityName}.js criado`)
    })
    fs.appendFile(`src/database/repositories/${entityName}Repository.js`, newRepository, (err) => {
        if (err) throw err
        console.log(`${entityName}Repository.js criado`)
    })
    fs.appendFile(`src/services/${upperEntityName}Service.js`, newService, (err) => {
        if (err) throw err
        console.log(`${upperEntityName}Service.js criado`)
    })
    fs.appendFile(`src/controllers/${upperEntityName}Controller.js`, newControler, (err) => {
        if (err) throw err
        console.log(`${upperEntityName}Controller.js criado`)
    })
    fs.appendFile(`src/routes/${entityName}Routes.js`, newRoute, (err) => {
        if (err) throw err
        console.log(`${entityName}Routes.js criado`)
    })
};createEntity()