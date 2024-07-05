const fs = require('fs');
const path = require('path');

// Define the path to the text file
const filePath = path.join(__dirname, 'writtenText.txt'); // Replace 'sample.txt' with your actual file name

// Reading the text file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }
    
    // Print the content of the file
    console.log(`File content:\n${data}`);

    // Example of manipulating file paths
    const fileName = path.basename(filePath); // Get the base name of the file
    const fileDir = path.dirname(filePath); // Get the directory name of the file
    const fileExtension = path.extname(filePath); // Get the file extension

    console.log(`File name: ${fileName}`);
    console.log(`File directory: ${fileDir}`);
    console.log(`File extension: ${fileExtension}`);
});