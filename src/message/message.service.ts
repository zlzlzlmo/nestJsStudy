import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService {
  // 의존성 주입
  // 의존성 주입은 IOC 테크닉 중 하나이다
  // 의존성들의 인스턴스를 ioc컨테이너로 위임한다
  constructor(private readonly messageRepo: MessageRepository) {}

  create(createMessageDto: CreateMessageDto) {
    return this.messageRepo.create(createMessageDto);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
}
