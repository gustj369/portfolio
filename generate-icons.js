/**
 * generate-icons.js
 * favicon.svg(금색 마름모)를 기준으로 PNG 아이콘과 favicon.ico 생성
 * 실행: node generate-icons.js
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const svg = fs.readFileSync(path.join(publicDir, 'favicon.svg'));
const BG = '#0a0a0a';

// 둥근 모서리의 투명 영역을 배경색으로 채워 iOS/Android에서 테두리가 비지 않게 함
function renderPng(size) {
  return sharp(svg, { density: 72 * (size / 32) })
    .resize(size, size)
    .flatten({ background: BG })
    .png()
    .toBuffer();
}

// PNG 이미지를 그대로 담는 ICO 파일 생성 (Vista 이후 모든 브라우저 지원)
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let offset = 6 + 16 * images.length;
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2);                       // palette
    entry.writeUInt8(0, 3);                       // reserved
    entry.writeUInt16LE(1, 4);                    // color planes
    entry.writeUInt16LE(32, 6);                   // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }
  return Buffer.concat([header, ...entries, ...images.map((img) => img.data)]);
}

async function generate() {
  const pngTargets = [
    { file: 'logo192.png', size: 192 },
    { file: 'logo512.png', size: 512 },
    { file: 'apple-touch-icon.png', size: 180 },
  ];
  for (const { file, size } of pngTargets) {
    fs.writeFileSync(path.join(publicDir, file), await renderPng(size));
    console.log(`✓ ${file} 생성 완료 (${size}×${size})`);
  }

  const icoSizes = [16, 32, 48];
  const icoImages = await Promise.all(
    icoSizes.map(async (size) => ({ size, data: await renderPng(size) }))
  );
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), buildIco(icoImages));
  console.log(`✓ favicon.ico 생성 완료 (${icoSizes.join(', ')})`);
}

generate().catch((err) => {
  console.error('✗ 생성 실패:', err.message);
  process.exit(1);
});
