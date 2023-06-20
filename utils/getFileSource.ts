import fs from "fs";
import path from "path";

export const getFileSource = (src: string) => {
  try {
    const filePath = path.join(process.cwd(), src);
    const data = fs.readFileSync(filePath, "utf8");
    return {
      fileSource: data,
    };
  } catch (err) {
    console.log(err);
  }
};

