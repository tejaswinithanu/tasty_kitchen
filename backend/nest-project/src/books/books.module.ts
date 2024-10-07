import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BooksService } from './books.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from 'src/model/books.model';


@Module({
    imports : [
        SequelizeModule.forFeature([Book])
    ],
    controllers:[BookController],
    providers:[BooksService]
})
export class BooksModule {}
