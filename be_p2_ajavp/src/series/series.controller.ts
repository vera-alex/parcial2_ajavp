import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('series')
@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Post()
  create(@Body() createSeriesDto: CreateSerieDto) {
    return this.seriesService.create(createSeriesDto);
  }

  @Get()
  findAll() {
    return this.seriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeriesDto: UpdateSerieDto) {
    return this.seriesService.update(+id, updateSeriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriesService.remove(+id);
  }
}
