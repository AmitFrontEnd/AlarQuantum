import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "5wk4o7k6",
  dataset: "production",
  apiVersion: "2025-06-05",  // current date
  useCdn: false,  // 👈 false = instant update, true = cached (1-2 min lag)
});