import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/project.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [ProjectsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
