import { IsEnum, IsNotEmpty, IsString } from "class-validator"

export enum eventLocation {
    SCHOOL = "school",
    HOTEL = "hotel",
    SILOM = "silom",
    HOME = "home"
}

export class createDtoEvent {
    @IsString()
    @IsNotEmpty()
    eventname!: string

    @IsString()
    @IsNotEmpty()
    date!: string

    @IsString()
    @IsNotEmpty()
    time!: string
    
    @IsEnum(eventLocation)
    @IsNotEmpty()
    location!: eventLocation
}


