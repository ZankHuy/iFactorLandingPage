import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputDir = './src/additinal-asset';
const outputDir = './src/additinal-asset';

const files = ['Hoang.png', 'Huyen.png', 'Duy.png'];

async function createProxy() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace('.png', '_proxy.png'));

    if (!fs.existsSync(inputPath)) {
      console.log(`❌ ${file} not found`);
      continue;
    }

    await sharp(inputPath)
      .resize(400, null, { withoutEnlargement: true })
      .png({ quality: 60 })
      .toFile(outputPath);

    console.log(`✅ Created ${file.replace('.png', '_proxy.png')}`);
  }
}

createProxy().catch(console.error);
