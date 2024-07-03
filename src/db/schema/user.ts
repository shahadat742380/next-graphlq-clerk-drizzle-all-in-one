import { pgTable, bigserial, text, timestamp } from "drizzle-orm/pg-core";

export const tbl_users = pgTable("tbl_users", {
  id: bigserial("id", { mode: "number" }).primaryKey().unique(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  profile: text("profile"), // profile image link
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});
