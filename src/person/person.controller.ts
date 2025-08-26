// src/person/person.controller.ts
import { Body, Controller, Get, Param, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonDto } from './dto/person';
import { Person, PersonDocument } from './schemas/person.schema';
import { PersonService } from './person.service';


@ApiTags('Persons')
@Controller('api/persons')
export class PersonController {
  constructor(@InjectModel(Person.name) private readonly personModel: Model<PersonDocument>, private readonly personService: PersonService) {}

  @Post()
  @ApiOperation({ summary: 'Add a new person' })
  @ApiResponse({ status: 201, description: 'Person created successfully.' })
  @ApiResponse({ status: 500, description: 'Failed to add person' })
  async addPerson(@Body() personDto: PersonDto): Promise<Person> {
    try {
      const createdPerson = new this.personModel(personDto);
      return await createdPerson.save();
    } catch (e) {
      console.error('Add person error:', e);  // <-- add this line
      throw new HttpException('Failed to add person', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all persons' })
  @ApiResponse({ status: 200, description: 'List of persons' })
  @ApiResponse({ status: 500, description: 'Failed to fetch persons' })
  async getPersons(): Promise<Person[]> {
    try {
      return await this.personModel.find().exec();
    } catch {
      throw new HttpException('Failed to fetch persons', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('children/:parentId')
  @ApiOperation({ summary: 'Get children by parent ID' })
  @ApiParam({ name: 'parentId', required: true, description: "The parent's ID" })
  @ApiResponse({ status: 200, description: 'List of children' })
  @ApiResponse({ status: 500, description: 'Failed to fetch children' })
  async getChildren(@Param('parentId') parentId: string): Promise<Person[]> {
    try {
      return await this.personModel.find({
        $or: [{ mother_id: parentId }, { father_id: parentId }],
      });
    } catch {
      throw new HttpException('Failed to fetch children', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiOperation({ summary: 'Get people' })
  @ApiResponse({ status: 200, description: 'List of people' })
  @ApiResponse({ status: 404, description: 'People not found' })
  @ApiResponse({ status: 500, description: 'Failed to fetch people' })
  @Get('people/')
  async getPeople(): Promise<Person[]> {
    return this.personService.findPeople();
  }

  @Get('cousins/:id_num')
  @ApiOperation({ summary: 'Get cousins by person id_number' })
  @ApiParam({ name: 'id_num', required: true, description: 'The id_number of the person' })
  @ApiResponse({ status: 200, description: 'List of cousins' })
  @ApiResponse({ status: 404, description: 'Person not found' })
  @ApiResponse({ status: 500, description: 'Failed to fetch cousins' })
  @Get('cousins/:id_num')
  async getCousins(@Param('id_num') id_num: string): Promise<Person[]> {
    return this.personService.findCousins(id_num);
  }


  @Get(":id/with-children")
  @ApiOperation({ summary: "Get a person and their children" })
  @ApiParam({
    name: "id",
    required: true,
    description: "The MongoDB ObjectId of the person",
  })
  @ApiResponse({
    status: 200,
    description: "Person with their children",
    schema: {
      example: {
        person: {
          _id: "64fabc1234567890abcdef12",
          name: "Alice",
          gender: "female",
          id_number: "369777888653339",
        },
        children: [
          {
            _id: "64fabc1234567890abcdef34",
            name: "Bob",
            gender: "male",
            id_number: "847263847263847",
          },
        ],
      },
    },
  })
  @ApiResponse({ status: 404, description: "Person not found" })
  @ApiResponse({ status: 500, description: "Failed to fetch person with children" })
  @Get(":id/with-children")
  async getPersonWithChildren(@Param("id") id: string) {
    console.log(`GAKHIGIMONETH: ${id}`);
    return this.personService.getPersonWithChildren(id);
  }
}