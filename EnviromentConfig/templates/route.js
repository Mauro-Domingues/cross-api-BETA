export function createRoute(arg, upperArg){
    const createNewService =
`import { Router } from 'express'
import { ${upperArg}Controller } from '../controllers/${upperArg}Controller.js'

const router = Router()
const ${arg}Controller = new ${upperArg}Controller()

router.get('/', ${upperArg}Controller.get)
router.get('/:id', ${upperArg}Controller.getById)
router.get('/name/:name', ${upperArg}Controller.getByName)
router.post('/', ${upperArg}Controller.create)
router.put('/:id', ${upperArg}Controller.update)
router.delete('/:id', ${upperArg}Controller.delete)

export default router`
    return createNewService
}