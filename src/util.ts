import * as fs from "fs";
import * as path from "path";

export function readJsonFile(filePath: string) {
  try {
    // try to read file
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return data;
  } catch (error) {
    console.error("Error reading file: ", error);
    return null;
  }
}

export function ensureOutputDirectoryExists(filePath: string): void {
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log(`Created output directory: ${dirPath}`);
  }
}

export function appendToJson(filePath: string, data: any): void {
  try {
    // ensure output directory exists
    ensureOutputDirectoryExists(filePath);

    // Assumes data is json array
    let existingData: any[] = [];

    // validate data
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf-8");
      existingData = JSON.parse(fileContents);
    }

    // append data
    existingData.push(data);

    // write data
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf-8");
    console.log(
      `Appended data to: ${filePath}:\n`,
      JSON.stringify(data, null, 2)
    );
  } catch (error) {
    console.log("Error writing to file:", error);
  }
}
