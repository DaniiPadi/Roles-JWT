import { Role } from "src/users/enums/rol.enums";

export class CreateUserDto {
  email: string;
  password: string;
  rol?: Role; // opcional, por defecto será 'usuario'
}

