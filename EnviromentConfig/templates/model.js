export function createModel(arg, upperArg){
    const createNewModel = `
    import { Entity, Column, PrimaryGeneratedColumn, DateTime } from "typeorm"

    @Entity('${arg}s')
    export class ${upperArg} {
        @PrimaryGeneratedColumn()
        id!: number

        @Column({ type: 'text' })
        name!: string

        @Column({ type: 'text', nullable: true})
        description!: string

        @column({ type: 'timestamp', autoCreate: true })
        createdAt!: DateTime

        @column({  type: 'timestamp', autoCreate: true, autoUpdate: true })
        updatedAt!: DateTime
    } // Ainda não funciona 100% pois precisa ser feito com typescript para tipar as colunas`
    return createNewModel
}  