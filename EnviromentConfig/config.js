import shell from 'shelljs'

const [create] = process.argv.slice(2)
const [arg] = process.argv.slice(4)
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

if (create === undefined){
    const trace = '\\'
    console.log("")
    console.log(" /=============================================// LISTA DE COMANDOS " + trace + trace + "============================================" + trace)
    console.log("|                                                                                                                  |")
    console.log("|                                                     make:api                                                     |")
    console.log("|                                                                                                                  |")
    console.log("|                                - É utilizado para gerar a estrutura da sua API                                   |")
    console.log("|                                                                                                                  |")
    console.log("|                                            make:entity nomeDaEntidade                                            |")
    console.log("|                                                                                                                  |")
    console.log("|                  - É utilizado para gerar a entidade, o repositório e o service da sua entidade                  |")
    console.log("|                                                                                                                  |")
    console.log("|                                           make:entity nomeDaEntidade c                                           |")
    console.log("|                                                                                                                  |")
    console.log("| - É utilizado para gerar a entidade, o repositório, o service, o controller e o arquivo de rotas da sua entidade |")
    console.log("|                                                                                                                  |")
    console.log(" " + trace + "=================================================================================================================/")
    console.log("")
}