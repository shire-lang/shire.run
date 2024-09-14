// load all json files under src/content/suites and concatenate them into "./dist/package.json"
const fs = require('fs')
const path = require('path')

// Directory where JSON files are located
const inputDir = path.join(__dirname, '../', 'src/content/suites')

// Output file
const outputFile = path.join(__dirname, '../', './dist/packages.json')

// Ensure output directory exists
const outputDir = path.dirname(outputFile)
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Function to merge all JSON files
const mergeJsonFiles = (inputDir) => {
  const files = fs.readdirSync(inputDir)
  let mergedData = []

  files.forEach((file) => {
    const filePath = path.join(inputDir, file)

    // Only process JSON files
    if (path.extname(file) === '.json') {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      try {
        const jsonData = JSON.parse(fileContent)
        mergedData.push(jsonData)
      } catch (error) {
        console.error(`Error parsing JSON in file: ${filePath}`, error)
      }
    }
  })

  return mergedData
}

// Merge the JSON data
const mergedData = mergeJsonFiles(inputDir)

// Write the merged data to package.json
fs.writeFileSync(outputFile, JSON.stringify(mergedData, null, 2))

console.log(`Merged JSON data has been written to ${outputFile}`)

