import { IsString, IsNotEmpty, IsNumber, IsEnum, Min, IsOptional} from 'class-validator'
import { participantSex, participantStatus } from '../participant.enum';

export class CreateParticipantDto{
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsNumber()
    @Min(0)
    age!: number;

    @IsEnum(participantSex)
    sex!: participantSex;

    @IsEnum(participantStatus)
    status!: participantStatus;
}

export class updateParticipantDto{
    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    age?: number;

    @IsEnum(participantSex)
    @IsOptional()
    sex?: participantSex;

    @IsEnum(participantStatus)
    @IsOptional()
    status?: participantStatus;
}   