import { drizzle } from "drizzle-orm/node-postgres";

import { Pool } from "pg";
import fs from "fs";

// ** import config
import { env } from "@/config";

// ** import schema
import * as schema from "./schema";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: {
    // Please re-download this certificate at least monthly to avoid expiry
    ca: fs.readFileSync("./ca.crt").toString(),
  },
});

export const db = drizzle(pool, {
  logger: false,
  schema,
});
