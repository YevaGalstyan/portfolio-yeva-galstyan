import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/project.module';

@Module({
  imports: [ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
