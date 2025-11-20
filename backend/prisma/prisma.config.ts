import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",       // path to your schema
  datasource: {
    url: env("DATABASE_URL"),
  },
});