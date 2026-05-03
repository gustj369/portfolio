/**
 * generate-og.js
 * sharp로 SVG 배경 + 프로필 사진 합성 → 1200×630 OG 이미지 생성
 * 실행: node generate-og.js
 */
const sharp = require('sharp');
const path = require('path');

// ⚠ Node 스크립트라 src/data/projects.js import 불가
// meta.social.githubLabel 값과 동기화 필요
const GITHUB_LABEL = "github.com/gustj369";

const W = 1200;
const H = 630;
const PHOTO_W = 460;

const svgLeft = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a"/>
      <stop offset="100%" style="stop-color:#111111"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#f5d78e"/>
      <stop offset="50%" style="stop-color:#d4a843"/>
      <stop offset="100%" style="stop-color:#b8912a"/>
    </linearGradient>
    <linearGradient id="fadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="60%" style="stop-color:#0a0a0a;stop-opacity:0"/>
      <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1"/>
    </linearGradient>
  </defs>

  <!-- 배경 -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)"/>

  <!-- 외곽 골드 프레임 -->
  <rect x="40" y="40" width="${W - 80}" height="${H - 80}"
        fill="none" stroke="#d4a843" stroke-width="1" opacity="0.3"/>

  <!-- 좌측 골드 세로 강조 라인 -->
  <rect x="80" y="100" width="3" height="200" fill="url(#goldGrad)" rx="1.5"/>

  <!-- 레이블 -->
  <text x="100" y="148"
        font-family="Georgia, serif"
        font-size="13"
        letter-spacing="6"
        fill="#d4a843"
        opacity="0.8">DEVELOPER · CREATOR</text>

  <!-- 메인 타이틀 -->
  <text x="98" y="240"
        font-family="Georgia, serif"
        font-size="80"
        font-weight="bold"
        fill="url(#goldGrad)"
        letter-spacing="-2">DEV·CREATOR</text>

  <!-- 서브 타이틀 -->
  <text x="100" y="295"
        font-family="Georgia, serif"
        font-size="19"
        fill="#777777"
        letter-spacing="1">AI와 개발로 작은 결과물을 만드는 개발자</text>

  <!-- 구분선 -->
  <line x1="100" y1="330" x2="500" y2="330"
        stroke="#d4a843" stroke-width="1" opacity="0.3"/>

  <!-- 태그들 -->
  <text x="100" y="368" font-family="Georgia, serif" font-size="14" fill="#555555" letter-spacing="2">Code</text>
  <text x="155" y="368" font-family="Georgia, serif" font-size="14" fill="#333333">·</text>
  <text x="170" y="368" font-family="Georgia, serif" font-size="14" fill="#555555" letter-spacing="2">Content</text>
  <text x="249" y="368" font-family="Georgia, serif" font-size="14" fill="#333333">·</text>
  <text x="264" y="368" font-family="Georgia, serif" font-size="14" fill="#555555" letter-spacing="2">AI Workflow</text>
  <text x="380" y="368" font-family="Georgia, serif" font-size="14" fill="#333333">·</text>
  <text x="395" y="368" font-family="Georgia, serif" font-size="14" fill="#555555" letter-spacing="2">Mini Games</text>

  <!-- 하단 URL -->
  <text x="100" y="${H - 70}"
        font-family="Georgia, serif"
        font-size="12"
        fill="#8b6fe8"
        opacity="0.6"
        letter-spacing="2">${GITHUB_LABEL}</text>

  <!-- 하단 골드 라인 -->
  <rect x="80" y="${H - 92}" width="${W - 160}" height="1"
        fill="#d4a843" opacity="0.15"/>

  <!-- 우측 사진 영역 페이드 오버레이 (자연스러운 경계) -->
  <rect x="${W - PHOTO_W - 80}" y="0" width="120" height="${H}" fill="url(#fadeRight)"/>
</svg>
`;

const outPath = path.join(__dirname, 'public', 'og-image.png');
const photoPath = path.join(__dirname, 'public', 'hyeonseo.png');

async function generate() {
  // SVG 배경 렌더링
  const bg = await sharp(Buffer.from(svgLeft)).png().toBuffer();

  // 프로필 사진: 우측에 맞게 리사이즈 (세로 전체 채움)
  const photo = await sharp(photoPath)
    .resize(PHOTO_W, H, { fit: 'cover', position: 'centre' })
    .png()
    .toBuffer();

  // 배경 + 사진 합성
  const result = await sharp(bg)
    .composite([
      {
        input: photo,
        left: W - PHOTO_W,
        top: 0,
        blend: 'over',
      },
    ])
    .png()
    .toFile(outPath);

  console.log(`✓ og-image.png 생성 완료 (${W}×${H}, ${(result.size / 1024).toFixed(1)} KB)`);
}

generate().catch((err) => {
  console.error('✗ 생성 실패:', err.message);
  process.exit(1);
});
