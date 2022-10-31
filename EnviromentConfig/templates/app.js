export function createApp() {
    const newApp = `
    import express from 'express'
    import { AppDataSource } from "./database/connection.js"
    import cors from './middlewares/cors.js'
    import exampleRoutes from './routes/example.js' // Mapeie suas rotas 

    AppDataSource.initialize().then(() => {
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use(cors)
        app.use('/example', exampleRoutes) // Use as rotas pelo app
    })

    export default app`
    return newApp
}