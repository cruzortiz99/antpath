import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/data_source/db/schema.ts",
  out: "./lib/data_source/db/migrations",
  driver: "expo",
  dialect: "sqlite",
});