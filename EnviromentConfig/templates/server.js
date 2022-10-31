export function createServer(){
    const newServer = 
`import app from '../src/app.js'

const port = normalizaPort(process.env.PORT || '3000')

function normalizaPort(val) {
    const port = parseInt(val, 10)
    if (isNaN(port)) {
        return val
    }

    if (port >= 0) {
        return port
    }

    return false
}

app.listen(port, () => {
    console.log('Rodando em http://localhost:3000')
})`
    return newServer
}