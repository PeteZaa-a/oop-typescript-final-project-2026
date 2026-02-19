import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { IParticipant } from './interface/participant.interface';
import { CreateParticipantDto, updateParticipantDto } from './dto/participant.dto';
import * as fs from 'fs/promises';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ParticipantService {
  private readonly dbPath = 'participants.json';

  
  private async readDB(): Promise<IParticipant[]> {
    try {
      const data = await fs.readFile(this.dbPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private async writeDB(data: IParticipant[]): Promise<void> {
    try {
      await fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
    } catch (error) {
      throw new InternalServerErrorException('ไม่สามารถบันทึกข้อมูลลงฐานข้อมูลได้');
    }
  }

  async findAll(): Promise<IParticipant[]> {
    return await this.readDB();
  }

  async findOne(id: string): Promise<IParticipant> {
    const participants = await this.readDB();
    const participant = participants.find((p) => p.id === id);
    if (!participant) {
      throw new NotFoundException(`ไม่พบผู้เข้าร่วมที่มี ID: ${id}`); 
    }
    return participant;
  }

  async create(dto: CreateParticipantDto): Promise<IParticipant> {
    const participants = await this.readDB();
    const newParticipant: IParticipant = {
      id: uuid(), 
      ...dto,
    };
    participants.push(newParticipant);
    await this.writeDB(participants);
    return newParticipant;
  }

  async update(id: string, dto: CreateParticipantDto): Promise<IParticipant> {
    const participants = await this.readDB();
    const index = participants.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('ไม่พบข้อมูลที่จะอัปเดต');

    participants[index] = { id, ...dto };
    await this.writeDB(participants);
    return participants[index];
  }

  async partialUpdate(id: string, dto: updateParticipantDto): Promise<IParticipant> {
    const participants = await this.readDB();
    const index = participants.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('ไม่พบข้อมูลที่จะอัปเดต');

    participants[index] = { ...participants[index], ...dto };
    await this.writeDB(participants);
    return participants[index];
  }

  async remove(id: string): Promise<{ message: string }> {
    const participants = await this.readDB();
    const filtered = participants.filter((p) => p.id !== id);
    
    if (participants.length === filtered.length) {
      throw new NotFoundException('ไม่พบข้อมูลที่จะลบ');
    }

    await this.writeDB(filtered);
    return { message: 'ลบข้อมูลสำเร็จ' };
  }
}