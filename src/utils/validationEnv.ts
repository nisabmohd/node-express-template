import { z } from "zod";
import { config } from "dotenv";
config();

// add schema of your environment variables
const schema = z.object({
  PORT: z.string().transform(Number),
  MONGO_URI: z.string(),
  LOGGER: z.string().transform(Boolean).optional(),
});

export type ENV = z.infer<typeof schema>;

export function validateEnv() {
  const parsed = schema.safeParse(process.env);
  if (!parsed.success) {
    console.error("❌ Missing or Invalid environment variabbles ❌");
    console.table(parsed.error.issues);
    process.exit(1);
  }
}
