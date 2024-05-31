import { Injectable } from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';

@Injectable()
export class SeriesService {
  create(createSeriesDto: CreateSerieDto) {
    return 'This action adds a new series';
  }

  findAll() {
    return `This action returns all series`;
  }

  findOne(id: number) {
    return `This action returns a #${id} series`;
  }

  update(id: number, updateSeriesDto: UpdateSerieDto) {
    return `This action updates a #${id} series`;
  }

  remove(id: number) {
    return `This action removes a #${id} series`;
  }
}
