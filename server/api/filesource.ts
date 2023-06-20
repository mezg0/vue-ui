import fs from "fs";
import * as path from "path";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  if (!query.src) {
    return new Response("No path provided", { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), query.src as string);

    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.log(err);
    return new Response("File not found", { status: 404 });
  }
});

