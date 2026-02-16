import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common'
import { IParticipant } from './interface/participant.interface'
import { CreateParticipantDto, updateParticipantDto } from './dto/participant.dto'
import * as fs from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';