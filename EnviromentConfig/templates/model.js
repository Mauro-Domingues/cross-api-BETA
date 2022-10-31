export function createModel(arg, upperArg) {
    const createNewModel =
`import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm"

/** Para consultar os tipos de colunas:
https://typeorm.io/entities#column-types */

@Entity('${arg}')
export class ${upperArg} {
    @PrimaryGeneratedColumn()
    id!: number

    //                   //
    // insira as colunas //
    //                   //

    @Column({ type: 'timestamp' })
    createdAt!: DateTime

    @Column({  type: 'timestamp', onUpdate: true })
    updatedAt!: DateTime

    // Exemplos de relações sendo esse o principal

    /*@OneToOne(() => Entity, entityColumn => entityColumn.this)
    @JoinColumn({name: 'entity_id'})
    entityColumn!: Relation<entityColumn>

    @OneToMany(() => Entity, entityColumn => entityColumn.this)
    entityColumn!: Entity[]

    @ManyToOne(() => Entity, entityColumn => entityColumn.this)
    @JoinColumn({name: 'entity_id'})
    entityColumn!: Entity

    @ManyToMany(() => Entity, entityColumn => entityColumn.this)
    @JoinTable() // especifica que esse é o principal da relação, deixe vazio no inverso
    entityColumn!: Entity[]*/

} // Ainda não funciona 100% pois precisa ser feito com typescript para tipar as colunas`
    return createNewModel
}  