import { IsEnum, IsNotEmpty, IsString } from "class-validator"

export enum eventLocation {
    SCHOOL = "school",
    HOTEL = "hotel",
    SILOM = "silom",
    HOME = "home",
    CHULALONGKORN = "Chulalongkorn University",
    MAHIDOL = "Mahidol University",
    THAMMASAT = "Thammasat University",
    KASETSART = "Kasetsart University",
    CHIANG_MAI = "Chiang Mai University",
    KHON_KAEN = "Khon Kaen University",
    PRINCE_OF_SONGKLA = "Prince of Songkla University",
    SRINAKHARINWIROT = "Srinakharinwirot University",
    SILPAKORN = "Silpakorn University",
    BURAPHA = "Burapha University",
    MAE_FA_LUANG = "Mae Fah Luang University",
    NARESUAN = "Naresuan University",
    SURANAREE_TECHNOLOGY = "Suranaree University of Technology",
    MAEJO = "Maejo University",
    UNIVERSITY_OF_PHAYAO = "University of Phayao",
    MAHASARAKHAM = "Mahasarakham University",
    KMITL = "KMITL",
    KMUTT = "KMUTT",
    KMUTNB = "KMUTNB",
    LADPRAO = "Ladprao"
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


