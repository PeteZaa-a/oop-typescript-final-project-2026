
import { Body, Controller, Get, Post, Patch } from "@nestjs/common";
import { createDtoEvent } from "./dto/create.event.dto"
import { EventsService } from "./events.service";


@Controller("events")
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get()
    findAll() {
        return this.eventsService.findAll()
    }
    
    @Post()
    create(@Body() createDtoEvent: createDtoEvent) {
        return this.eventsService.create(createDtoEvent)
    }
    
    



    }

