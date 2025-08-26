// src/person/dto/business.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AddressDto } from './address';

export class BusinessDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description?: string;

  @ApiPropertyOptional({ type: AddressDto })
  address: AddressDto;
}