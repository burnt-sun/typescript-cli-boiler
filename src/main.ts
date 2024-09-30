import * as path from "path";
import { readJsonFile, appendToJson } from "./util";

async function main() {
  // grab input and output directories
  const dataFilePath = path.join(__dirname, "data.json");
  const outputFilePath = path.join(__dirname, "output.json");

  // read input
  const inputData = readJsonFile(dataFilePath);

  // validate input
  if (!inputData || !inputData.message) {
    console.error("Invalid or input missing data.");
    return;
  }

  // prep output
  const timestamp = new Date().toUTCString();

  const outputData = {
    message: inputData.message,
    timestamp,
  };

  // write output
  appendToJson(outputFilePath, outputData);
}

// run script
main();
