
import { Table,Column,Model, DataType, AllowNull, PrimaryKey } from "sequelize-typescript";

@Table
export class User extends Model {
    @Column({
        type : DataType.STRING,
        primaryKey : true,
        allowNull : false,
        unique : true
    })
    email : string


    @Column({
        type : DataType.STRING,
        allowNull : false,
    })
    password : string

    @Column({
        type : DataType.JSON,

    })
    roles !: string[]
}

