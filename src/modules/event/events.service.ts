import { createDtoEvent } from "./dto/create.event.dto";
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common"
import { join } from "path";
import process from "process";
import * as fs from "fs-extra"
import { UpdateDtoEvent, UpdateDtoEventAll } from "./dto/update.event.dto";

@Injectable()
export class EventsService {
  private readonly databasePath = join(process.cwd(), "event.json")
  private async readDatabase(): Promise<createDtoEvent[]> {
    try {
      const data = await fs.readFile(this.databasePath, 'utf8')
      return JSON.parse(data) as createDtoEvent[]
    } catch (e) {
      console.error("database error")
      return []
    }
  }
async findAll(): Promise<createDtoEvent[]> {
    try {
      return await this.readDatabase()
      //return eventsData as createDtoEvent[]

    } catch (e) {
      if (e instanceof Error) {
        console.log("cannot read file")
        throw Error

      }
      return []
    }
  }
async create(DtoEvent: createDtoEvent): Promise<createDtoEvent> {
    const data = await this.findAll()
    data.push(DtoEvent)

    try {
      const toString = JSON.stringify(data, null, 2)
      await fs.writeFile(this.databasePath, toString, 'utf8')
      return DtoEvent
    } catch (e) {
      throw new InternalServerErrorException("cannot create events")
    }
  }
// ใช้ชื่อกิจกรรม (เลือกกิจกรรม) เพื่อไปเปลี่ยนข้อมูลอื่น ใช้กับอัพเดททั้งหมด(Put) และอัพเดทบางอัน(Patch)
  async update(eventname: string, updateDto: UpdateDtoEvent | UpdateDtoEventAll): Promise<createDtoEvent> {
    const event = await this.findAll()
    const index = event.findIndex((e: createDtoEvent) => e.eventName === eventname)

    if (index === -1) {
      throw new NotFoundException(`cannot find ${eventname} to update`)
    }

    const updatedEvent: createDtoEvent = {
      ...event[index],
      ...updateDto
    }

    event[index] = updatedEvent

    const toString = JSON.stringify(event, null, 2)
    await fs.writeFile(this.databasePath, toString, "utf-8")
    return event[index]
  }
async remove(eventName: string) {
    const event = await this.findAll()
    const index = event.findIndex((e: createDtoEvent) => e.eventName === eventName)

    if (index === -1) {
      throw new NotFoundException("cannot delete because not found event name")
    }


    const newArrayEventNotDel = event.filter((e: createDtoEvent) => e.eventName !== eventName)
    const toString = JSON.stringify(newArrayEventNotDel, null, 2)
    fs.writeFile(this.databasePath, toString, "utf-8")
    return "deleted"
  }
async getEventsByName(eventname: string): Promise<createDtoEvent> {
    const events = await this.findAll()

    const event = events.find(e => e.eventName.trim() === eventname.trim())

    if (!event) {
      throw new NotFoundException(`cannot find ${eventname}`)
    }
    return event
  }
}
