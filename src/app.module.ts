import { Module } from '@nestjs/common';
import { EventsController } from './modules/event/events.controller';
import { EventsService } from './modules/event/events.service';
import { ParticipantModule } from './modules/participant/particioant.module';

@Module({
  imports: [],
  controllers: [EventsController],
  providers: [EventsService],
})

@Module({
  imports: [ParticipantModule]
})
export class AppModule {}
