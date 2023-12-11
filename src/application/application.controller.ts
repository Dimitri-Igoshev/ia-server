import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'config/multer';

@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createApplicationDto: CreateApplicationDto,
  ) {
    if (file) createApplicationDto.file = file.filename;
    return this.applicationService.create(createApplicationDto);
  }

  @Get()
  findAll() {
    return this.applicationService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.applicationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateApplicationDto: UpdateApplicationDto) {
  //   return this.applicationService.update(+id, updateApplicationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.applicationService.remove(+id);
  // }
}
