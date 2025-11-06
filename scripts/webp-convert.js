const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public';
const outputDir = './public/webp';

console.log('Starting conversion...');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Recursively get all JPG files
function getAllJpgFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively search subdirectories
      getAllJpgFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg)$/i.test(file)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Convert each file
async function convertImages() {
  const allJpgFiles = getAllJpgFiles(inputDir);
  
  console.log(`Found ${allJpgFiles.length} JPG files`);
  
  if (allJpgFiles.length === 0) {
    console.log('No JPG files found!');
    return;
  }

  for (const inputPath of allJpgFiles) {
    // Get relative path from inputDir
    const relativePath = path.relative(inputDir, inputPath);
    const outputPath = path.join(outputDir, relativePath.replace(/\.(jpg|jpeg)$/i, '.webp'));
    
    // Create subdirectories in output if needed
    const outputSubDir = path.dirname(outputPath);
    if (!fs.existsSync(outputSubDir)) {
      fs.mkdirSync(outputSubDir, { recursive: true });
    }
    
    try {
      await sharp(inputPath)
        .webp({ quality: 90 })
        .toFile(outputPath);
    } catch (error) {
      console.error(`✗ Error converting ${relativePath}:`, error.message);
    }
  }
  
  console.log('All images converted!');
}

convertImages();