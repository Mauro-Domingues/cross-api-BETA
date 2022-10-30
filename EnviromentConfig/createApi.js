import fs from 'fs'
import { createServer } from './templates/server.js'
import { createApp } from './templates/app.js'
import { createConnection } from './templates/connection.js'
import { createEnv } from './templates/env.js'
import { createJWT } from './templates/jwt.js'
import { createCors } from './templates/cors.js'

const createApi = () => {
    const newServer = createServer()
    const newApp = createApp()
    const newConnection = createConnection()
    const newEnv = createEnv()
    const newJWT = createJWT()
    const newCors = createCors()
    fs.mkdirSync('bin')
    fs.mkdirSync('src')
    fs.mkdirSync('src/controllers')
    fs.mkdirSync('src/database')
    fs.mkdirSync('src/entities')
    fs.mkdirSync('src/middlewares')
    fs.mkdirSync('src/routes')
    fs.mkdirSync('src/services')
    fs.mkdirSync('src/database/repositories')
    fs.appendFile('bin/server.js', newServer, (err) => {
        if (err) throw err
        console.log("Server Criado")
    })
    fs.appendFile('src/app.js', newApp, (err) => {
        if (err) throw err
        console.log("App Criado")
    })
    fs.appendFile('src/database/connection.js', newConnection, (err) => {
        if (err) throw err
        console.log("Conexão Criada")
    })
    fs.appendFile('.env', newEnv, (err) => {
        if (err) throw err
        console.log("Env Criado")
    })
    fs.appendFile('src/middlewares/auth.js', newJWT, (err) => {
        if (err) throw err
        console.log("JWT Criado")
    })
    fs.appendFile('src/middlewares/cors.js', newCors, (err) => {
        if (err) throw err
        console.log("Cors Criado")
    })
};createApi()