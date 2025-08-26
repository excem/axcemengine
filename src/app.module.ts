// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonModule } from './person/person.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.AXCEM_CONNECTION_STRING || 'mongodb://localhost/axcemengine', {}),
    PersonModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),  // serve entire public folder at '/'
      serveRoot: '/',                             // serve at root URL, so images are at /images/alice.jpg
    }),    
  ],
})
export class AppModule {}
