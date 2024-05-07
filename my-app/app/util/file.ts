import * as fs from "fs/promises";
import * as path from "path";

export const readMdfiles = async (dirPath: string) => {
  const files = await fs.readdir(dirPath);
  return files.filter((file) => path.extname(file).toLowerCase() === ".md");
};

export const readMdFilesAsBuffers = async (
  dirPath: string
): Promise<Buffer[]> => {
  const mdFiles = await readMdfiles(dirPath);
  const buffers = await Promise.all(
    mdFiles.map(async (file) => {
      const filePath = path.join(dirPath, file);
      const data = await fs.readFile(filePath);
      return data;
    })
  );

  return buffers;
};
