export enum eventLocation {
    SCHOOL = "school",
    HOTEL = "hotel",
    SILOM = "silom",
    HOME = "home"
}

export class createDtoEvent {
    name!: string
    date!: string
    time!: string
    
    location!: eventLocation
}

