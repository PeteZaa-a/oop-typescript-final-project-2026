import { Body, Controller, Get, Post, Patch, Param, Delete } from "@nestjs/common";
import { createDtoEvent } from "./dto/create.event.dto"
import { EventsService } from "./events.service";
import { UpdateDtoEvent } from "./dto/update.event.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("events")
@Controller("events")
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }

  @Get()
  @ApiOperation({ summary: "Get all events" })
  async findAllEvents() {
    const getData = await this.eventsService.findAll()
    return {
      success: true,
      message: "successful to get all data",
      data: getData
    }
  }
@ApiOperation({ summary: "create new events" })
  @Post()
  async createEvent(@Body() createDtoEvent: createDtoEvent) {
    const createData = await this.eventsService.create(createDtoEvent)
    return {
      success: true,
      message: "create event successful",
      data: createData
    }
  }
@ApiOperation({ summary: "update events" })
  @Patch(":eventname")
  async update(
    @Param("eventname") eventname: string,
    @Body() updateDto: UpdateDtoEvent
  ) {
    const updateData = await this.eventsService.update(eventname, updateDto)
    return {
      success: true,
      message: `updated events ${eventname} successful`,
      data: updateData
    }
  }
@ApiOperation({ summary: "delete events" })
  @Delete(":eventname")
  async remove(@Param("eventname") eventname: string) {
    const delEvent = await this.eventsService.remove(eventname)
    return {
      success: true,
      message: `deleted events ${eventname} successful`,
      data: delEvent
    }
  }
@Get(":eventname")
  async getEventsByName(@Param("eventname") eventname: string) {
    const getEventFromName = await this.eventsService.getEventsByName(eventname)
    return {
      success: true,
      message: `success to get ${eventname}`,
      data: getEventFromName
    }
  }
}
