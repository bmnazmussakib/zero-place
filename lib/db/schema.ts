import { mysqlTable, serial, varchar, text } from "drizzle-orm/mysql-core";

export const services = mysqlTable("services", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  image: varchar("image", { length: 255 }).notNull(),
  icon: varchar("icon", { length: 100 }).notNull(),
  imageIcon: varchar("image_icon", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
});

export type Service = typeof services.$inferSelect;
export type NewService = typeof services.$inferInsert;
