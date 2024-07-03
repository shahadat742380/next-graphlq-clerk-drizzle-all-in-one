import { defineConfig } from "drizzle-kit";
import { env } from "@/config";

export default defineConfig({
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
  out: "./drizzle",
  migrations: {
    table: 'drizzle_migrations',
    schema: 'public',
  },
  tablesFilter: [ 'public', 'tembo'],
  // extensionsFilters: ["postgis"],
  // schemaFilter: ["public", "tembo"],
});
