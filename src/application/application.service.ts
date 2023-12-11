import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';
import { Repository } from 'typeorm';
import { newApplicationMail } from 'src/mail/templates/new-application';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,
    private mailService: MailService,
  ) {}

  async create(createApplicationDto: CreateApplicationDto) {
    let application = new Application();
    application = { ...application, ...createApplicationDto };
    const res = await this.applicationsRepository.save(application);

    await this.mailService.send(newApplicationMail(createApplicationDto));

    return res;
  }

  findAll() {
    return this.applicationsRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} application`;
  // }

  // update(id: number, updateApplicationDto: UpdateApplicationDto) {
  //   return `This action updates a #${id} application`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} application`;
  // }
}
