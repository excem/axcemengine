// src/person/dto/person.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AddressDto } from './address';
import { DocumentItemDto } from './document-item';
import { BusinessDto } from './business';

export class PersonDto {

  @ApiProperty()
  name: string;

  @ApiProperty()
  gender: "male" | "female";

  @ApiProperty()
  type: string;

  @ApiProperty()
  age: string;

  @ApiProperty()
  emoji: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  id_number: string;

  @ApiProperty()
  passport_number: string;

  @ApiProperty({ type: [String] })
  interests: string[];

  @ApiPropertyOptional()
  mother_id?: string;

  @ApiPropertyOptional()
  father_id?: string;

  @ApiPropertyOptional()
  children?: PersonDto[]

  @ApiPropertyOptional({ type: AddressDto })
  address: AddressDto;

  @ApiPropertyOptional({ type: [DocumentItemDto] })
  documents?: DocumentItemDto[];

  @ApiPropertyOptional({ type: [BusinessDto], description: 'Optional list of businesses' })
  businesses?: BusinessDto[];
}