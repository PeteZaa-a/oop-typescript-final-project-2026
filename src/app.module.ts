import { Module } from '@nestjs/common';
import { EventsController } from './modules/event/events.controller';
import { EventsService } from './modules/event/events.service';

@Module({
  imports: [],
  controllers: [EventsController],
  providers: [EventsService],
})

export class AppModule {}
