import { Controller, Get, Post, Put, Patch, Delete, Body, Param, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto, updateParticipantDto } from './dto/participant.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ApiResponse } from '@/common/interfaces/ApiResponse.Interfaces';
import { IParticipant } from './interface/participant.interface';


@ApiTags('participants')
@Controller('participants')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'สร้างผู้เข้าร่วมใหม่' })
  async create(@Body() dto: CreateParticipantDto): Promise<ApiResponse<CreateParticipantDto>> {
    const createdParticipant = await this.participantService.create(dto)
    return {
      success: true,
      message: `successful to create participant `,
      data: createdParticipant
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'ดึงข้อมูลผู้เข้าร่วมตาม ID' })
  async findOne(@Param('id') id: string): Promise<ApiResponse<CreateParticipantDto>> {
    const getId = await this.participantService.findOne(id);
    return {
      success: true,
      message: "successful to get data by id",
      data: getId
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'อัปเดตข้อมูลผู้เข้าร่วมทั้งหมดตาม ID' })
  async update(@Param('id') id: string, @Body() dto: CreateParticipantDto): Promise<ApiResponse<CreateParticipantDto>> {
    const updateAllId = await this.participantService.update(id, dto);
    return {
      success: true,
      message: `successful to update participant with id: ${id}`,
      data: updateAllId
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'อัปเดตข้อมูลผู้เข้าร่วมบางส่วนตาม ID' })
  async partialUpdate(@Param('id') id: string, @Body() dto: updateParticipantDto): Promise<ApiResponse<updateParticipantDto>> {
    const partialUpdateId = await this.participantService.partialUpdate(id, dto);
    return {
      success: true,
      message: `successful to partial update participant with id: ${id}`,
      data: partialUpdateId
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'ลบผู้เข้าร่วมตาม ID' })
  async remove(@Param('id') id: string): Promise<ApiResponse<string>> {
   const delParticipants = await this.participantService.remove(id);
   return {
     success: true,
     message: `successful to delete participant with id: ${id}`,
     data: delParticipants.message
   }
  }

  @Get('events/:eventname')
  @ApiOperation({ summary: "see people join event" })
  async getByEvent(@Param("eventname") eventname: string): Promise<ApiResponse<IParticipant[]>> {
    const getPeopleInEvent = await this.participantService.findParticipantsByEvent(eventname);
    return {
      success: true,
      message: `successful to get participants for event: ${eventname}`,
      data: getPeopleInEvent
    }
  }

  @Get()
  @ApiOperation({ summary: "filter a participant" })
  async findAll(
    @Query("event") eventname?: string,
    @Query("sex") sex?: string,
    @Query("status") status?: string,
  ): Promise<ApiResponse<IParticipant[]>> {
    const query = await this.participantService.findWithFilter(eventname, sex, status) 
      return {
        success: true,
        message: `successful`,
        data: query
    }
  }
}
