
import { createDtoEvent } from "./dto/create.event.dto";
import { Injectable } from "@nestjs/common"
import * as path from "path";
import { join } from "path";
import process from "process";
import fs from "fs-extra"

@Injectable() 
export class EventsService {
    private readonly databasePath = join(process.cwd(),"event.json")
    private readDatabase() {
        const data = fs.readFileSync(this.databasePath, 'utf8')
        return JSON.parse(data)
    }

    findAll() {
        const eventsData = this.readDatabase()
        return eventsData.event
    }
    
    
}   