# TypeScript Project Structure

This document outlines the standard file structure for a TypeScript project.

## Project Structure

```
project-root/
│
├── src/                # Source files
│   ├── index.ts        # Entry point
│   ├── components/     # Reusable components
│   ├── services/       # Business logic
│   └── utils/          # Utility functions
│
├── dist/               # Compiled output
│
├── tests/              # Test files
│
├── node_modules/       # Node.js packages
│
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
└── .gitignore          # Ignored files and directories
```

## Guidelines

- **src/**: Contains all the TypeScript source files.
- **dist/**: Contains the compiled JavaScript files.
- **tests/**: Contains all test files.
- **node_modules/**: Contains all Node.js packages.
- **package.json**: Lists project metadata and dependencies.
- **tsconfig.json**: Configures TypeScript compiler options.
- **.gitignore**: Specifies files and directories to be ignored by Git.
