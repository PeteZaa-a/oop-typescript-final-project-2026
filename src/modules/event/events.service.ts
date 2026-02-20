
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
        try {
            const data = fs.readFileSync(this.databasePath, 'utf8')
            return JSON.parse(data)
            
        } catch (e) {
            if (e instanceof Error) {
                return []          
            }
            
        }
    }

    findAll() {
        try {
            const eventsData = this.readDatabase()
            return eventsData

        } catch (e) {
            if (e instanceof Error) {
                console.log("cannot read file")
                throw Error
                return []
            }
        }
    }
    
    create(DtoEvent: createDtoEvent):createDtoEvent {
        const data = this.findAll()
        data.push(DtoEvent)

        const toString = JSON.stringify(data, null, 2)
        fs.writeFileSync(this.databasePath, toString, 'utf8')
        return DtoEvent
    }
    
    update() {
        
    }
}   