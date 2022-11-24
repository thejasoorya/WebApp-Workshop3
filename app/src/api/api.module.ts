import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/entity/authuser.entity';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [ApiController, ProductController],
  providers: [ApiService, ProductService]
})
export class ApiModule {}
