// src/person/schemas/business.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address, AddressSchema } from './address.schema';

@Schema()
export class Business {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({ type: AddressSchema })
  address: Address;
}

export type BusinessDocument = Business & Document;
export const BusinessSchema = SchemaFactory.createForClass(Business);