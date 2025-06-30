import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Role } from '../enums/rol.enums';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.CLIENTES })
  rol: Role; // Asumiendo que tienes un enum Role definido en otro lugar
}
