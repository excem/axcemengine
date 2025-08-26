// src/person/schemas/document-item.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DocumentItemDocument = DocumentItem & Document;

@Schema()
export class DocumentItem {
  @Prop({ required: true, enum: ['hospitalDoc', 'generalDoc', 'certificate', 'business'] })
  type: 'hospitalDoc' | 'generalDoc' | 'certificate' | 'business';

  @Prop({ required: true })
  description: string;

  @Prop()
  createdDate?: string;

  @Prop()
  certificateName?: string;

  @Prop()
  certificateProvider?: string;

  @Prop()
  validUntil?: string;

  @Prop()
  registrationNumber?: string;

  @Prop([String]) // Array of strings for file URLs/paths
  files?: string[];
  
}

export const DocumentItemSchema = SchemaFactory.createForClass(DocumentItem);

