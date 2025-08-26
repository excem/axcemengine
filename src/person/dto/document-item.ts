// src/person/dto/document-item.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DocumentItemDto {
  @ApiProperty({ enum: ['hospitalDoc', 'generalDoc', 'certificate', 'business'], description: 'Type of document' })
  type: 'hospitalDoc' | 'generalDoc' | 'certificate' | 'business';

  @ApiProperty({ description: 'Description of the document' })
  description: string;

  // hospitalDoc props
  @ApiPropertyOptional()
  hospitalName?: string;

  @ApiPropertyOptional()
  admissionDate?: string;

  @ApiPropertyOptional()
  dischargeDate?: string;

  // generalDoc props
  @ApiPropertyOptional()
  docName?: string;

  @ApiPropertyOptional()
  issuedDate?: string;

  // certificate props
  @ApiPropertyOptional()
  certificateName?: string;

  @ApiPropertyOptional()
  certificateIssuer?: string;

  @ApiPropertyOptional()
  validUntil?: string;

  // business props
  @ApiPropertyOptional()
  businessName?: string;

  @ApiPropertyOptional()
  businessType?: string;

  @ApiPropertyOptional()
  registrationNumber?: string;

  @ApiPropertyOptional({ 
    description: 'List of file URLs or paths related to the document',
    type: [String],
  })
  files?: string[];
  
}

