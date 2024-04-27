import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {

  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>
  ) { }

  async create (createCityDto: CreateCityDto) {
    try {

      const city = this.cityRepository.create(createCityDto);
      await this.cityRepository.save(city);

      return city

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }

  findAll () {
    return this.cityRepository.find();
  }

  findOne (cityId: number) {
    return this.cityRepository.findOne({
      where: {
        id: cityId
      }
    })
  }
}
