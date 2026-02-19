import { Controller, Get, Post, Put, Patch, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto, updateParticipantDto } from './dto/participant.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('participants')
@Controller('participants')
export class ParticipantController{
    constructor(private readonly participantService: ParticipantService){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'สร้างผู้เข้าร่วมใหม่' })
    async create(@Body() dto: CreateParticipantDto) {
        return await this.participantService.create(dto);
    }

    @Get()
    @ApiOperation({ summary: 'ดึงข้อมูลผู้เข้าร่วมทั้งหมด' })
    async findAll() {
        return await this.participantService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'ดึงข้อมูลผู้เข้าร่วมตาม ID' })
    async findOne(@Param('id') id: string) {
        return await this.participantService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'อัปเดตข้อมูลผู้เข้าร่วมทั้งหมดตาม ID' })
    async update(@Param('id') id: string, @Body() dto: CreateParticipantDto) {
        return await this.participantService.update(id, dto);
    }   

    @Patch(':id')
    @ApiOperation({ summary: 'อัปเดตข้อมูลผู้เข้าร่วมบางส่วนตาม ID' })
    async partialUpdate(@Param('id') id: string, @Body() dto: updateParticipantDto) {
        return await this.participantService.partialUpdate(id, dto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'ลบผู้เข้าร่วมตาม ID' })
    async remove(@Param('id') id: string) {
        await this.participantService.remove(id);
    }
}
    