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