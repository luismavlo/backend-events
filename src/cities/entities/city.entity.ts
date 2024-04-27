import { Event } from 'src/events/entities/event.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    unique: true
  })
  name: string

  @Column('text')
  image: string

  @OneToMany(
    () => Event,
    event => event.city,
    { cascade: true }
  )
  events?: Event

}
