import { City } from 'src/cities/entities/city.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string

  @Column('text')
  description: string

  @Column('text')
  image: string

  @Column('int4')
  cityId: number

  @ManyToOne(
    () => City,
    city => city.events
  )
  city: City

}
