import { Module } from '@nestjs/common';
import { EventsController } from './modules/event/events.controller';
import { EventsService } from './modules/event/events.service';
import { ParticipantModule } from './modules/participant/participant.module';
import { AppController } from './app.controller';

@Module({
  imports: [ParticipantModule],
  controllers: [EventsController, AppController],
  providers: [EventsService],
})

export class AppModule {}

