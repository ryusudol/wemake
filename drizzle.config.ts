import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/features/**/schema.ts",
  out: "./app/sql/migration",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
