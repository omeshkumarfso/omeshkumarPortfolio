const fs = require('fs');
const path = require('path');

// --- Configuration ---
const EXCLUDE_FOLDERS = ['node_modules','.git','.next'];
const EXCLUDE_FILES = ['.env','a.js','package-lock.json'];
const OUTPUT_FILE_NAME = 'all_project_contents.txt'; // Name of the output text file

let outputStream; // We'll use a write stream for efficiency

/**
 * Recursively walks a directory, processes files, and writes their paths and content,
 * respecting exclusion rules.
 * @param {string} currentPath The current directory to read.
 * @param {string} rootScanPath The initial path where the scan began (usually process.cwd()).
 */
function walkAndProcessFiles(currentPath, rootScanPath) {
    const items = fs.readdirSync(currentPath);

    items.forEach(function(item) {
        const fullPath = path.join(currentPath, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            // Check if the directory should be excluded
            if (EXCLUDE_FOLDERS.includes(item)) {
                console.log(`Skipping directory: ${item}/`);
                return; // Skip this directory and its contents
            }
            // If it's a directory and not excluded, recurse into it
            walkAndProcessFiles(fullPath, rootScanPath);
        } else if (stats.isFile()) {
            // Check if the file should be excluded
            if (EXCLUDE_FILES.includes(item)) {
                console.log(`Skipping file: ${item}`);
                return; // Skip this file
            }

            // If it's a file and not excluded, read its content and write to the output stream
            try {
                const fileContent = fs.readFileSync(fullPath, 'utf8');
                const relativePath = path.relative(rootScanPath, fullPath); // Get path relative to the root scan directory

                outputStream.write(`=== FILE PATH: root/${relativePath.replace(/\\/g, '/')} ===\n`);
                outputStream.write(fileContent);
                outputStream.write('\n=====================================================\n\n');
                console.log(`Processed: ${relativePath}`);
            } catch (readError) {
                console.error(`Error reading file ${fullPath}: ${readError.message}`);
                outputStream.write(`=== FILE PATH: root/${fullPath.replace(/\\/g, '/')} ===\n`);
                outputStream.write(`ERROR: Could not read file content. ${readError.message}\n`);
                outputStream.write('=====================================================\n\n');
            }
        }
    });
}

/**
 * Initiates the scanning process from the current working directory.
 */
function startScanning() {
    const startDir = process.cwd(); // Get the current working directory

    console.log(`Starting scan from: ${startDir}`);

    // Initialize the write stream
    outputStream = fs.createWriteStream(OUTPUT_FILE_NAME, { encoding: 'utf8' });

    outputStream.on('error', (err) => {
        console.error(`Error writing to output file ${OUTPUT_FILE_NAME}:`, err);
    });

    outputStream.on('finish', () => {
        console.log(`\nAll processed file contents have been written to ${OUTPUT_FILE_NAME}`);
    });

    try {
        console.log(`Processing files in '${startDir}' and its subdirectories...`);
        walkAndProcessFiles(startDir, startDir); // Start walking from the current directory
    } catch (error) {
        console.error(`Error during directory scan:`, error.message);
    } finally {
        outputStream.end(); // Close the stream when done
    }
}

// --- Run the function ---
startScanning();