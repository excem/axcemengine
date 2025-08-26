import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person, PersonDocument } from './schemas/person.schema';

@Injectable()
export class PersonService {

  constructor(@InjectModel(Person.name) private personModel: Model<PersonDocument>) {}

  async findPeople(): Promise<Person[]> {
    const people = await this.personModel.find();
    if (!people) return [];
    return people;
    }



    
  // Find cousins of a person by IDNUM
  async findCousins(IDNUM: string): Promise<Person[]> {
    // 1. Find person by IDNUM
    const person = await this.personModel.findOne({ IDNUM });
    if (!person) return [];

    // 2. Find parents' siblings (aunts/uncles)
    // First find parents' IDNUMs
    const mother = person.MOTHERID ? await this.personModel.findById(person.MOTHERID) : null;
    const father = person.FATHERID ? await this.personModel.findById(person.FATHERID) : null;

    // Parents' siblings = persons with same MOTHERID or FATHERID as person's parents
    // For mother: siblings share mother's parents
    // For father: siblings share father's parents

    // Helper: get siblings of a parent
    const getSiblings = async (parent: Person | null) => {
      if (!parent) return [];
      if (!parent.MOTHERID && !parent.FATHERID) return []; // no grandparents info, no siblings found

      return this.personModel.find({
        $and: [
          { _id: { $ne: parent.IDNUM } }, // exclude the parent itself
          {
            $or: [
              { MOTHERID: parent.MOTHERID || null },
              { FATHERID: parent.FATHERID || null },
            ],
          },
        ],
      });
    };

    const motherSiblings = await getSiblings(mother);
    const fatherSiblings = await getSiblings(father);

    // 3. Find children of these aunts/uncles => cousins
    const auntUncleIds = [...motherSiblings, ...fatherSiblings].map((p) => p._id);

    const cousins = await this.personModel.find({
      $or: [
        { MOTHERID: { $in: auntUncleIds } },
        { FATHERID: { $in: auntUncleIds } },
      ],
    });

    return cousins;
  }
  async getPersonWithChildren(IDNUM: string): Promise<Person> {
    const person = await this.personModel.findOne({ IDNUM }).lean();
    if (!person) {
      throw new NotFoundException("Person not found");
    }
  
    let childrenQuery: Record<string, any> = {};
  
    if (person.GENDER === "FEMALE") {
      childrenQuery = { MOTHERID: person.IDNUM };
    } else if (person.GENDER === "MALE") {
      childrenQuery = { FATHERID: person.IDNUM };
    } else {
      person.CHILDREN = [];
      return person;
    }
  
    const children = await this.personModel.find(childrenQuery).lean();
    person.CHILDREN = children || [];
  
    return person;
  }
  
  
  
}
