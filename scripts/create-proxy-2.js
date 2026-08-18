import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputDir = './src/additinal-asset';

const files = ['Quan.png', 'Hieu.png'];

async function createProxy() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(inputDir, file.replace('.png', '_proxy.png'));

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
