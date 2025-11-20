import { Injectable } from '@nestjs/common';
import { Prisma, Project } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async getAllProjects(): Promise<Project[]> {
    return this.prisma.project.findMany({
      include: { overview: true },
    });
  }

  async getProject(id: number): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { id },
      include: { overview: true },
    });
  }

  async createProject(data: Prisma.ProjectCreateInput): Promise<Project> {
    return this.prisma.project.create({ data });
  }
}
