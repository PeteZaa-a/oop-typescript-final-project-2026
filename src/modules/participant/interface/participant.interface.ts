import { participantSex } from '../participant.enum'
import { participantStatus } from '../participant.enum';

export interface IParticipant {
    id: string;
    name: string;
    age: number;
    sex: participantSex;
    status: participantStatus;

}