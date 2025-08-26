import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';  // likely added
import { Person, PersonSchema } from './schemas/person.schema';
import { Address, AddressSchema } from './schemas/address.schema';
import { DocumentItem, DocumentItemSchema } from './schemas/document-item.schema';
import { Business, BusinessSchema } from './schemas/business.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Person.name, schema: PersonSchema },
      { name: Address.name, schema: AddressSchema },
      { name: DocumentItem.name, schema: DocumentItemSchema },
      { name: Business.name, schema: BusinessSchema },
    ]),
  ],
  controllers: [PersonController],
  providers: [PersonService],  // service added to provide business logic
})
export class PersonModule {}
