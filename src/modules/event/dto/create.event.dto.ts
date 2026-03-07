import { IsEnum, IsNotEmpty, IsString } from "class-validator"

export enum eventLocation {
  SCHOOL = "school",
  HOTEL = "hotel",
  SILOM = "silom",
  HOME = "home",
  CHULALONGKORN = "Chulalongkorn University",

}

export class createDtoEvent {
  @IsString()
  @IsNotEmpty()
  eventName!: string

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


