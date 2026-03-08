import { Body, Controller, Get, Post, Patch, Param, Delete, Put, HttpCode, HttpStatus } from "@nestjs/common";
import { createDtoEvent } from "./dto/create.event.dto"
import { EventsService } from "./events.service";
import { UpdateDtoEvent } from "./dto/update.event.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiResponse } from "@/common/interfaces/ApiResponse.Interfaces";


@ApiTags("events")
@Controller("events")
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }

  @Get()
  @ApiOperation({ summary: "Get all events" })
  @HttpCode(HttpStatus.OK)
  async findAllEvents(): Promise<ApiResponse<createDtoEvent[]>> {
    const getData = await this.eventsService.findAll()
    return {
      success: true,
      message: "successful to get all data",
      data: getData
    }
  }

  @ApiOperation({ summary: "create new events" })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createEvent(@Body() createDtoEvent: createDtoEvent): Promise<ApiResponse<createDtoEvent>> {
    const createData = await this.eventsService.create(createDtoEvent)
    return {
      success: true,
      message: "create event successful",
      data: createData
    }
  }
  
  @ApiOperation({ summary: "update events (แก้บางอัน)" })
  @Patch(":eventname")
  @HttpCode(HttpStatus.OK)
  async update(
    @Param("eventname") eventname: string,
    @Body() updateDto: UpdateDtoEvent
  ): Promise<ApiResponse<createDtoEvent>> {
    const updateData = await this.eventsService.update(eventname, updateDto)
    return {
      success: true,
      message: `updated events ${eventname} successful`,
      data: updateData
    }
  }

  @ApiOperation({ summary: "update events (แก้ทั้งหมด)" })
  @Put(":eventname")
  @HttpCode(HttpStatus.OK)
  async updatAll(
    @Param("eventname") eventname: string,
    @Body() updateDto: createDtoEvent
  ): Promise<ApiResponse<createDtoEvent>> {
    const result = await this.eventsService.update(eventname, updateDto)
    return {
      success: true,
      message: `success to update all ${eventname} data`,
      data: result
    }
  }

  @ApiOperation({ summary: "delete events" })
  @Delete(":eventname")
  @HttpCode(HttpStatus.OK)
  async remove(@Param("eventname") eventname: string): Promise<ApiResponse<string>> {
    const delEvent = await this.eventsService.remove(eventname)
    return {
      success: true,
      message: `deleted events ${eventname} successful`,
      data: delEvent
    }
  }

  @ApiOperation({ summary: "get event by name" })
  @Get(":eventname")
  @HttpCode(HttpStatus.OK)
  async getEventsByName(@Param("eventname") eventname: string): Promise<ApiResponse<createDtoEvent>> {
    const getEventFromName = await this.eventsService.getEventsByName(eventname)
    return {
      success: true,
      message: `success to get ${eventname}`,
      data: getEventFromName
    }
  }
}
