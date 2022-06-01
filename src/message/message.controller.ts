import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('존재하지 않는 메시지');
    }
    return message;
  }
}
