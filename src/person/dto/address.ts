// src/person/dto/address.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty()
  street: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  country: string;
}

