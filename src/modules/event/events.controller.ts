import { Body, Controller, Get, Post, Patch, Param, Delete } from "@nestjs/common";
import { createDtoEvent } from "./dto/create.event.dto"
import { EventsService } from "./events.service";
import { UpdateDtoEvent } from "./dto/update.event.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { eventNames } from "process";

@ApiTags("events")
@Controller("events")
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get()
    @ApiOperation({ summary: "Get all events"})
    findAllEvents() {
        return this.eventsService.findAll()
    }
    
    @ApiOperation({ summary: "create new events"})
    @Post()
    createEvent(@Body() createDtoEvent: createDtoEvent) {
        return this.eventsService.create(createDtoEvent)
    }
    
    @ApiOperation({ summary: "update events"})
    @Patch(":eventname")
    update(
        @Param("eventname") eventname: string,
        @Body() updateDto: UpdateDtoEvent
    ) {
        return this.eventsService.update(eventname, updateDto)
    }

    @ApiOperation({ summary: "delete event"})
    @Delete(":eventname")
    remove(@Param("eventname") eventname: string) {
        return this.eventsService.remove(eventname)
    }

    @Get(":eventname")
    async getEventsByName(@Param("eventname") eventname: string) { 
        return await this.eventsService.getEventsByName(eventname)
    } 
    }

