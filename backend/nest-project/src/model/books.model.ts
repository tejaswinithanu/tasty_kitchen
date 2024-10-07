import { Column, DataType, Table ,Model} from "sequelize-typescript";

@Table({
    tableName : 'Authors',
    timestamps : true
})
export class Book extends Model{
    @Column({
        type : DataType.STRING,
        primaryKey : true 
    })
    id !: string 

    @Column({
        type : DataType.STRING,
        primaryKey : true
        
    })
    name !: string


    @Column({
        type : DataType.STRING,
    })
    biography !: string

    @Column({
        type : DataType.STRING,
        allowNull : false
    })
    photograph !: string

    @Column({
        type : DataType.STRING,
        allowNull : true,
        get(){
            const value = this.getDataValue('tags')
            return value ? JSON.parse(value) : ''
        },
        set(value : string[]){
            this.setDataValue('tags',JSON.stringify(value))
        }
    })
    tags !: string[]

}