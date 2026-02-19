import { IsNotEmpty, IsString } from "class-validator"

export enum eventLocation {
    SCHOOL = "school",
    HOTEL = "hotel",
    SILOM = "silom",
    HOME = "home"
}

export class createDtoEvent {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsString()
    @IsNotEmpty()
    date!: string

    @IsString()
    @IsNotEmpty()
    time!: string
    

    location!: eventLocation
}

