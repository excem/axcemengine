// src/person/schemas/person.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Address, AddressSchema } from './address.schema';
import { DocumentItem, DocumentItemSchema } from './document-item.schema';
import { Business, BusinessSchema } from './business.schema';


export type PersonDocument = Person & Document;

@Schema()
export class Person {

  @Prop({ required: true })
  NAME: string;
  
  @Prop({ required: false })
  GENDER: "MALE" | "FEMALE";

  @Prop({ required: true })
  TYPETH: string;

  @Prop({ required: true })
  AGETH: string;

  @Prop({ required: true })
  EMOJIMETH: string;

  @Prop({ required: true })
  IMAGETH: string;

  @Prop({ required: true, index: true })
  IDNUM: string;

  @Prop({ required: true })
  PASSPORTETHNUM: string;

  @Prop({ type: [String], default: [] })
  interests: string[];

  @Prop({ index: true })
  MOTHERID?: string;

  @Prop({ index: true })
  FATHERID?: string;

  @Prop({ index: false })
  CHILDREN?: Person[];

  @Prop({ type: AddressSchema, required: true })
  ADDRESS: Address;

  @Prop({ type: [DocumentItemSchema], default: [] })
  documents?: DocumentItem[];

  @Prop({ type: [BusinessSchema], required: false })
  businesses?: Business[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);
