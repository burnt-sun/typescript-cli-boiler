## CLI TypeScript File Processor

This project serves as a boilerplate for creating a containerized TypeScript script that can be executed either as a **standalone command** or as a **long-running service**. It shows how to build, run, and manage a TypeScript-based Node.js CLI tool inside a Docker container.

### How It Works:
1. **Input**: The tool reads a JSON file from the `data` directory (e.g., `data.json`).
2. **Processing**: It extracts the `message` field from the input file, appends the current timestamp, and processes the data.
3. **Output**: The processed data is appended to `output/output.json`. If the file doesn’t exist, it creates it, or if it exists, it adds the new entry.


## Build & Run
1. `docker compose up`

## Develop
1. `npm install`
2. `npm run start`