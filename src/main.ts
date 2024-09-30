import * as path from "path";
import { readJsonFile, appendToJson } from "./util";

async function main() {
  // grab input and output directories from environment variables
  const inputDir = process.env.INPUT_DIR || "../data";
  const outputDir = process.env.OUTPUT_DIR || "../output";
  const dataFilePath = path.join(__dirname, inputDir, "data.json");
  const outputFilePath = path.join(__dirname, outputDir, "output.json");

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
