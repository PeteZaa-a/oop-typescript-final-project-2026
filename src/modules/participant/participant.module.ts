import { Module } from '@nestjs/common';
import { ParticipantController } from './participant.controller';
import { ParticipantService } from './participant.service'; 
import { EventsModule } from '../event/events.module';

@Module({
    imports: [EventsModule],
    controllers: [ParticipantController],
    providers: [ParticipantService],
    exports: [ParticipantService],
})
export class ParticipantModule {}