import fs from 'fs'

fs.copyFile('./node_modules/api-template/EnviromentConfig/templates/package.json', 'package.json', (err) => {
    if (err) throw err
})

console.log("")
console.log(`Digite "npm i" para instalar as dependências necessárias`)
console.log("")
console.log(`Digite "npm run cross" para ver os comandos`)
console.log("")