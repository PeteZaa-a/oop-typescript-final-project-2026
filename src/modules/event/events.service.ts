import { createDtoEvent } from "./dto/create.event.dto";
import { Injectable, NotFoundException } from "@nestjs/common"
import { join } from "path";
import process from "process";
import fs from "fs-extra"
import { UpdateDtoEvent } from "./dto/update.event.dto";

@Injectable() 
export class EventsService {
    private readonly databasePath = join(process.cwd(),"event.json")
    private readDatabase() {
        try {
            const data = fs.readFileSync(this.databasePath, 'utf8')
            return JSON.parse(data) as createDtoEvent[]
        } catch (e) {
            if (e instanceof Error) {
                return []          
            }
        }
    }

    findAll(): createDtoEvent[] {
        try {
            const eventsData = this.readDatabase()
            return eventsData as createDtoEvent[]

        } catch (e) {
            if (e instanceof Error) {
                console.log("cannot read file")
                throw Error
                
            }
            return []
        }
    }
    
    create(DtoEvent: createDtoEvent) {
        const data = this.findAll()
        data.push(DtoEvent)

        const toString = JSON.stringify(data, null, 2)
        fs.writeFileSync(this.databasePath, toString, 'utf8')
        return DtoEvent
    }
    
    // ใช้ชื่อกิจกรรม (เลือกกิจกรรม) เพื่อไปเปลี่ยนข้อมูลอื่น
    update(eventname: string, updateDto: UpdateDtoEvent) {
        const event = this.findAll()
        const index = event.findIndex((e:createDtoEvent) => e.eventname === eventname)
    
        if (index === -1) {
            throw new NotFoundException("not found")
        }
        
        const updatedEvent: createDtoEvent = {
            ...event[index],
            ...updateDto
        }

        event[index] = updatedEvent
        
        const toString = JSON.stringify(event,null,2)
        fs.writeFileSync(this.databasePath, toString, "utf-8")
        return event[index]
    }

    remove(eventname: string) {
        const event = this.findAll()
        const index = event.findIndex((e: createDtoEvent) => e.eventname === eventname)

        if (index === -1) {
            throw new NotFoundException("cannot delete because not found event name")
        }
        

        const newArrayEventNotDel = event.filter((e: createDtoEvent) => e.eventname !== eventname)
        const toString = JSON.stringify(newArrayEventNotDel,null,2)
        fs.writeFileSync(this.databasePath, toString, "utf-8")
        return "deleted"
    }
}   