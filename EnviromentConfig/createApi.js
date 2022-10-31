import fs from 'fs'
import { createServer } from './templates/server.js'
import { createApp } from './templates/app.js'
import { createConnection } from './templates/connection.js'
import { createEnv } from './templates/env.js'
import { createJWT } from './templates/jwt.js'
import { createCors } from './templates/cors.js'
import { createGitIgnore } from './templates/gitIgnore.js'

const createApi = () => {
    const newServer = createServer()
    const newApp = createApp()
    const newConnection = createConnection()
    const newEnv = createEnv()
    const newJWT = createJWT()
    const newCors = createCors()
    const newGitIgnore = createGitIgnore()
    if (!fs.existsSync('bin')) { fs.mkdirSync('bin') }
    if (!fs.existsSync('src')) { fs.mkdirSync('src') }
    if (!fs.existsSync('src/controllers')) { fs.mkdirSync('src/controllers') }
    if (!fs.existsSync('src/database')) { fs.mkdirSync('src/database') }
    if (!fs.existsSync('src/entities')) { fs.mkdirSync('src/entities') }
    if (!fs.existsSync('src/middlewares')) { fs.mkdirSync('src/middlewares') }
    if (!fs.existsSync('src/routes')) { fs.mkdirSync('src/routes') }
    if (!fs.existsSync('src/services')) { fs.mkdirSync('src/services') }
    if (!fs.existsSync('src/database/repositories')) { fs.mkdirSync('src/database/repositories') }
    if (!fs.existsSync('bin/server.js')) {
        fs.appendFile('bin/server.js', newServer, (err) => {
            if (err) throw err
            console.log("Server Criado")
        })
    }
    if (!fs.existsSync('src/app.js')) {
        fs.appendFile('src/app.js', newApp, (err) => {
            if (err) throw err
            console.log("App Criado")
        })
    }
    if (!fs.existsSync('src/database/connection.js')) {
        fs.appendFile('src/database/connection.js', newConnection, (err) => {
            if (err) throw err
            console.log("Conexão Criada")
        })
    }
    if (!fs.existsSync('.env')) {
        fs.appendFile('.env', newEnv, (err) => {
            if (err) throw err
            console.log("Env Criado")
        })
    }
    if (!fs.existsSync('.gitignore')) {
        fs.appendFile('.gitignore', newGitIgnore, (err) => {
            if (err) throw err
            console.log("Gitignore Criado")
        })
    }
    if (!fs.existsSync('src/middlewares/auth.js')) {
        fs.appendFile('src/middlewares/auth.js', newJWT, (err) => {
            if (err) throw err
            console.log("JWT Criado")
        })
    }
    if (!fs.existsSync('src/middlewares/cors.js')) {
        fs.appendFile('src/middlewares/cors.js', newCors, (err) => {
            if (err) throw err
            console.log("Cors Criado")
        })
    }
}; createApi()