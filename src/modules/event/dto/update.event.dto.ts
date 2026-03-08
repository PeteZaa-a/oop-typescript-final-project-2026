import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { eventLocation } from "./create.event.dto"

export class UpdateDtoEvent { 
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    eventName?: string
  
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    date?: string
  
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    time?: string
  
    @IsEnum(eventLocation)
    @IsNotEmpty()
    @IsOptional()
    location?: eventLocation
}

export class UpdateDtoEventAll {
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


