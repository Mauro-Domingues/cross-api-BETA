import shell from 'shelljs'

const [create] = process.argv.slice(2)
const arg = process.argv.slice(4)

if(create === 'make:api'){
    shell.exec('node ./EnviromentConfig/createApi.js')
} else if (create === 'make:entity') {
    if(arg === 'c'){
        shell.exec(`node ./EnviromentConfig/createFullEntity.js ${upperEntityName}`)
    } else {
        shell.exec(`node ./EnviromentConfig/createEntity.js ${upperEntityName}`)
    }
}