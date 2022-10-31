export function createRoute(arg, upperArg){
    const createNewService =
`import { Router } from 'express'
import { ${upperArg}Controller } from '../controllers/${upperArg}Controller.js'

const router = Router()
const ${arg}Controller = new ${upperArg}Controller()

router.get('/', ${arg}Controller.get)
router.get('/:id', ${arg}Controller.getById)
router.get('/name/:name', ${arg}Controller.getByName)
router.post('/', ${arg}Controller.create)
router.put('/:id', ${arg}Controller.update)
router.delete('/:id', ${arg}Controller.delete)

export default router`
    return createNewService
}