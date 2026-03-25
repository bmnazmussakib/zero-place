import { db } from "./index";
import { services } from "./schema";
import { serviceItems } from "../constants";

async function seed() {
  console.log("Seeding database...");
  
  // Clear existing services to avoid duplicates
  // Note: For simple seeding, we just insert. 
  // In production you might want truncate or upsert.
  
  const data = serviceItems.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,
    icon: item.icon,
    imageIcon: item.imageIcon,
    slug: item.slug || "",
  }));

  try {
    await db.insert(services).values(data);
    console.log("Seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seed();
