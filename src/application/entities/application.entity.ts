import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  service: string;

  @Column({ nullable: true })
  desc: string;

  @Column({ nullable: true })
  file: string;
}
