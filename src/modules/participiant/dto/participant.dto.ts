export enum participantStatus {
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled"
}

export class info {
    name!:string
    age!: number
    sex!: string

    status!: participantStatus
}

