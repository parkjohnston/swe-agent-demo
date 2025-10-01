# TypeScript Project Structure

This document outlines the standard file structure for a TypeScript project.

## Project Structure

```
/your-project-root
|-- src
|   |-- index.ts          # Entry point
|   |-- components/       # Reusable components
|   |-- services/         # Business logic
|   |-- models/           # TypeScript interfaces and types
|   |-- utils/            # Utility functions
|
|-- tests
|   |-- unit/             # Unit tests
|   |-- integration/      # Integration tests
|
|-- dist/                 # Compiled output
|-- node_modules/         # Node.js packages
|-- package.json          # NPM package configuration
|-- tsconfig.json         # TypeScript configuration
|-- .gitignore            # Git ignore file
```

## Notes
- The `dist/` directory is where the compiled JavaScript files will be output.
- Ensure `dist/` is included in `.gitignore` to prevent committing compiled files.
- Organize code into logical directories to maintain clarity and separation of concerns.
