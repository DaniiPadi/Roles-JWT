import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateIngredienteDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  unidad?: string;
}
