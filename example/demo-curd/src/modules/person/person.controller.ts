import { Controller, Get, Post,Put,Delete, Body, Query } from '@nestjs/common';
import { query } from 'express';
import { IdDto } from './dto/id.dto';
import { PersonDTO } from './dto/person.dto'
import { PersonService } from './person.service'

@Controller('/person')
export class PersonController {
  constructor(
    private readonly personService: PersonService
  ) {}

  @Get('/list')
  getList() {
    return this.personService.getList()
  }

  @Get('/detail')
  getDetail(
    @Query()
    idDto: IdDto
  ) {
    return this.personService.getDetail(idDto)
  }

  @Post('/add')
  add(
    @Body()
    person: PersonDTO
  ) {
    return this.personService.add(person)
  }

  @Put('/update')
  update(
    @Body()
    person: PersonDTO
  ) {
    return this.personService.update(person)
  }

  @Delete('/delete')
  delete(
    @Body()
    idDto: IdDto
  ) {
    return this.personService.delete(idDto)
  }

}
