// person.schema.ts

import mongoose, { Document, Schema } from "mongoose";

export interface Address {
  street: string;
  city: string;
  country: string;
}

export interface Person extends Document {
  type: string;
  age: string;
  emoji: string;
  image: string;
  id_number: string;
  passport_number: string;
  interests: string[];
  mother_id?: string;
  father_id?: string;
  gender: "male" | "female";
  address: Address;
}

const AddressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const PersonSchema = new Schema<Person>({
  type: { type: String, required: true },
  age: { type: String, required: true },
  emoji: { type: String, required: true },
  image: { type: String, required: true },
  id_number: { type: String, required: true },
  passport_number: { type: String, required: true },
  interests: [{ type: String }],
  mother_id: { type: String },
  father_id: { type: String },
  gender: { type: String, enum: ["male", "female"], required: true },
  address: { type: AddressSchema, required: true },
});

export const PersonModel = mongoose.model<Person>("Person", PersonSchema);
