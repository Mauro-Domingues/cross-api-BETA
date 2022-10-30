import shell from 'shelljs'

const [create] = process.argv.slice(2)
const arg = process.argv.slice(4)
const [upperEntityName] = process.argv.slice(3)
let entityName = null

if (upperEntityName !== undefined){
    entityName = `${upperEntityName.charAt(0).toUpperCase()}${upperEntityName.slice(1)}`
}

if(create === 'make:api'){
    shell.exec('node ./node_modules/api-template/EnviromentConfig/createApi.js')
} else if (create === 'make:entity' && entityName !== null) {
    if(arg === 'c'){
        shell.exec(`node ./node_modules/api-template/EnviromentConfig/createFullEntity.js ${entityName}`)
    } else {
        shell.exec(`node ./node_modules/api-template/EnviromentConfig/createEntity.js ${entityName}`)
    }
}