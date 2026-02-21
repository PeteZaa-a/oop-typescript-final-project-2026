import { Body, Controller, Get, Post, Patch, Param, Delete } from "@nestjs/common";
import { createDtoEvent } from "./dto/create.event.dto"
import { EventsService } from "./events.service";
import { UpdateDtoEvent } from "./dto/update.event.dto";

@Controller("events")
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get()
    findAllEvents() {
        return this.eventsService.findAll()
    }
    
    @Post()
    createEvent(@Body() createDtoEvent: createDtoEvent) {
        return this.eventsService.create(createDtoEvent)
    }
    
    @Patch(":eventname")
    update(
        @Param("eventname") eventname: string,
        @Body() updateDto: UpdateDtoEvent
    ) {
        return this.eventsService.update(eventname, updateDto)
    }

    @Delete(":eventname")
    remove(@Param("eventname") eventname: string) {
        return this.eventsService.remove(eventname)
    }
    

    }

