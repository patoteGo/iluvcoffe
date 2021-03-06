import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesController } from './coffees/coffees.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController],
  providers: [AppService, CoffeesService],
})
export class AppModule {}
