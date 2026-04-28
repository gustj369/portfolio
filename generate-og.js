/**
 * generate-og.js
 * sharp(devDep)로 SVG → PNG 변환, 1200×630 OG 이미지 생성
 * 실행: node generate-og.js
 */
const sharp = require('sharp');
const path = require('path');

const W = 1200;
const H = 630;

const svg = `
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
  </defs>

  <!-- 배경 -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)"/>

  <!-- 외곽 골드 프레임 -->
  <rect x="40" y="40" width="${W - 80}" height="${H - 80}"
        fill="none" stroke="#d4a843" stroke-width="1" opacity="0.4"/>

  <!-- 내부 카드 -->
  <rect x="52" y="52" width="${W - 104}" height="${H - 104}"
        fill="#111111" rx="4"/>

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
  <text x="98" y="230"
        font-family="Georgia, serif"
        font-size="72"
        font-weight="bold"
        fill="url(#goldGrad)"
        letter-spacing="-1">DEV·CREATOR</text>

  <!-- 서브 타이틀 -->
  <text x="100" y="285"
        font-family="Georgia, serif"
        font-size="20"
        fill="#888888"
        letter-spacing="1">AI와 개발로 작은 결과물을 만드는 개발자</text>

  <!-- 구분선 -->
  <line x1="100" y1="320" x2="540" y2="320"
        stroke="#d4a843" stroke-width="1" opacity="0.3"/>

  <!-- 태그들 -->
  <text x="100" y="360" font-family="Georgia, serif" font-size="14" fill="#555555" letter-spacing="2">Code</text>
  <text x="155" y="360" font-family="Georgia, serif" font-size="14" fill="#333333">·</text>
  <text x="170" y="360" font-family="Georgia, serif" font-size="14" fill="#555555" letter-spacing="2">Content</text>
  <text x="249" y="360" font-family="Georgia, serif" font-size="14" fill="#333333">·</text>
  <text x="264" y="360" font-family="Georgia, serif" font-size="14" fill="#555555" letter-spacing="2">AI Workflow</text>
  <text x="380" y="360" font-family="Georgia, serif" font-size="14" fill="#333333">·</text>
  <text x="395" y="360" font-family="Georgia, serif" font-size="14" fill="#555555" letter-spacing="2">Mini Games</text>

  <!-- 우측 장식: 다이아몬드 -->
  <polygon points="980,260 1040,315 980,370 920,315"
           fill="none" stroke="#d4a843" stroke-width="1.5" opacity="0.25"/>
  <polygon points="980,288 1010,315 980,342 950,315"
           fill="none" stroke="#d4a843" stroke-width="1" opacity="0.4"/>
  <polygon points="980,306 998,315 980,324 962,315"
           fill="#d4a843" opacity="0.6"/>

  <!-- 우측 하단 바이올렛 강조 -->
  <rect x="${W - 180}" y="${H - 130}" width="80" height="3"
        fill="#8b6fe8" opacity="0.4" rx="1.5"/>
  <text x="${W - 175}" y="${H - 108}"
        font-family="Georgia, serif"
        font-size="11"
        fill="#8b6fe8"
        opacity="0.5"
        letter-spacing="2">github.com/gustj369</text>

  <!-- 하단 골드 라인 -->
  <rect x="80" y="${H - 92}" width="${W - 160}" height="1"
        fill="#d4a843" opacity="0.15"/>
</svg>
`;

const outPath = path.join(__dirname, 'public', 'og-image.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outPath)
  .then(info => {
    console.log(`✓ og-image.png 생성 완료 (${W}×${H}, ${(info.size / 1024).toFixed(1)} KB)`);
  })
  .catch(err => {
    console.error('✗ 생성 실패:', err.message);
    process.exit(1);
  });
