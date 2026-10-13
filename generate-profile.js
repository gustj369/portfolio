/**
 * generate-profile.js
 * 배너 이미지(hyeonseo.png)에서 인물 영역만 잘라 Hero용 프로필 사진 생성
 * 실행: node generate-profile.js
 */
const sharp = require('sharp');
const path = require('path');

// hyeonseo.png(1281×707)는 좌측에 배너 글자, 우측에 인물이 있는 이미지
// 배너 글자("Developer"의 끝, x≈810)가 끝난 뒤인 x=830부터 3:4 비율로 자름
// generate-og.js의 사진 크롭 기준과 동일
const CROP = { left: 830, top: 0, width: 451, height: 601 };

const srcPath = path.join(__dirname, 'public', 'hyeonseo.png');
const outBase = path.join(__dirname, 'public', 'profile');

async function generate() {
  const cropped = sharp(srcPath).extract(CROP);

  const webp = await cropped.clone().webp({ quality: 82 }).toFile(`${outBase}.webp`);
  const jpg = await cropped.clone().jpeg({ quality: 85, mozjpeg: true }).toFile(`${outBase}.jpg`);

  console.log(`✓ profile.webp 생성 완료 (${webp.width}×${webp.height}, ${(webp.size / 1024).toFixed(1)} KB)`);
  console.log(`✓ profile.jpg 생성 완료 (${jpg.width}×${jpg.height}, ${(jpg.size / 1024).toFixed(1)} KB)`);
}

generate().catch((err) => {
  console.error('✗ 생성 실패:', err.message);
  process.exit(1);
});
