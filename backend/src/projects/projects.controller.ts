import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Prisma } from '@prisma/client';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAll() {
    return this.projectsService.getAllProjects();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.projectsService.getProject(Number(id));
  }

  @Post()
  create(@Body() data: Prisma.ProjectCreateInput) {
    return this.projectsService.createProject(data);
  }
}
