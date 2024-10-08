import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';

@Module({
  imports: [SequelizeModule.forRoot({dialect : 'sqlite',
                storage : "../../books.sqlite",
                autoLoadModels :true,
                synchronize : true
            }),
            BooksModule,
            UserModule
],
})
export class AppModule {}
 