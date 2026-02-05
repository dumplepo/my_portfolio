const { sql } = require("drizzle-orm");
const { pgTable, text, varchar } = require("drizzle-orm/pg-core");
const { createInsertSchema } = require("drizzle-zod");
const { z } = require("zod");

// Define the users table
const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Create a schema for inserting users (pick username & password)
const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

module.exports = {
  users,
  insertUserSchema,
  z,
};
