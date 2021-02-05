import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffes')
export class CoffesController {
  @Get('')
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `returns all coffes. Limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `THis action returns #${id} coffe`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE) //
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action removes #${id} coffee`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
