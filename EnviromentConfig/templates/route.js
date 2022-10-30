export function createRoute(arg){
    const createNewService = `
    import { Router } from 'express'
    import ${arg}Controller from '../controllers/${arg}Controller.js'

    const router = Router()
    const ${arg}Controller = new ${arg}Controller()

    router.get('/', ${arg}Controller.get)
    router.get('/:id', ${arg}Controller.getById)
    router.get('/name/:name', ${arg}Controller.getByName)
    router.post('/', ${arg}Controller.create)
    router.put('/:id', ${arg}Controller.update)
    router.delete('/:id', ${arg}Controller.delete)

    export default router`
    return createNewService
}