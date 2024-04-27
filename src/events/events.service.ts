import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
import { CitiesService } from 'src/cities/cities.service';

@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    private readonly cityService: CitiesService

  ) { }

  async create (createEventDto: CreateEventDto) {
    try {
      const city = await this.cityService.findOne(createEventDto.cityId)

      if (!city) throw new NotFoundException('city not found')

      const event = this.eventRepository.create({
        name: createEventDto.name,
        description: createEventDto.description,
        image: createEventDto.image,
        city
      });

      await this.eventRepository.save(event)

      return event;

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException();

    }
  }

  findAll (cityId: number) {
    return this.eventRepository.find({
      where: {
        cityId: cityId
      }
    });
  }
}
