
# Prime Numbers Collision - Big Bang Generator

## 👤 Author
**Muhammad Firdaus bin Rosli** 
Assessment Implementation & Documentation

## 🎯 Assessment Overview
This project simulates a hypothetical scenario where two prime numbers (3 and 5) collided to create a "Big Bang". The program generates a predictive model using TypeScript to analyze patterns of these numbers.

## 💻 Quick Start Guide

### Step 1: Setup Project
```bash
# Create and enter project directory
mkdir bigbang-project
cd bigbang-project

# Create necessary files
touch index.ts tsconfig.json
```

### Step 2: Create Required Files

Create `index.ts` with this content:
```typescript
import * as fs from 'fs';

// Function to determine what string to return based on number's divisibility
const getBigBangString = (num: number): string => {
    if (num % 3 === 0 && num % 5 === 0) return "BIGBANG";
    if (num % 3 === 0) return "BIG";
    if (num % 5 === 0) return "BANG";
    return num.toString();
};

// Generate array from 1 to 100
const generateBigBangArray = (): string[] => {
    return Array.from({ length: 100 }, (_, i) => getBigBangString(i + 1));
};

// Main function to generate and save the output
const main = (): void => {
    try {
        const result = generateBigBangArray();
        fs.writeFileSync('output.json', JSON.stringify(result, null, 2));
        console.log('Successfully generated output.json file!');
    } catch (error) {
        console.error('Error occurred:', error);
    }
};

// Execute the main function
main();
```

Create `tsconfig.json` with this content:
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### Step 3: Install Dependencies
```bash
# Initialize npm project
npm init -y

# Install required dependencies
npm install typescript @types/node
npm install -g ts-node
```

### Step 4: Run the Program
```bash
ts-node index.ts
```

### Step 5: View Output
```bash
cat output.json
```

## 🎯 Problem Statement
The program solves the following requirements:
- Generate numbers from 1 to 100
- Replace numbers divisible by 3 with "BIG"
- Replace numbers divisible by 5 with "BANG"
- Replace numbers divisible by both 3 and 5 with "BIGBANG"
- Save results to output.json file

## 📝 Expected Output Example
```json
[
  "1",
  "2",
  "BIG",
  "4",
  "BANG",
  "BIG",
  "7",
  "8",
  "BIG",
  "BANG",
  "11",
  "BIG",
  "13",
  "14",
  "BIGBANG"
  // ... continues to 100
]
```

## 🔧 Troubleshooting Common Issues

1. **'ts-node' is not recognized**
   ```bash
   npm install -g ts-node
   ```

2. **TypeScript compilation errors**
   ```bash
   npm install -D typescript @types/node
   ```

3. **Permission denied for file creation**
   - Ensure you have write permissions in the directory
   - Run with appropriate permissions

## 📁 Project Structure
```
bigbang-project/
├── index.ts           # Main TypeScript implementation
├── tsconfig.json      # TypeScript configuration
├── output.json        # Generated output file
└── README.md         # This documentation file
```

## ⚙️ Technical Implementation
- Language: TypeScript
- Runtime: Node.js
- Core Modules: fs (File System)
- Development Tools: ts-node, @types/node

## 📊 Assessment Complexity
- Difficulty: 2/10 (Beginner-Friendly)
- Key Concepts: Prime Numbers, Divisibility, File I/O

## 🤝 Contributing
Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

© 2025 Muhammad Firdaus bin Rosli. All Rights Reserved.

*This project is part of a technical assessment demonstrating TypeScript programming skills and file system operations.*
