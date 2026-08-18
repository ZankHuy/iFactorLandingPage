# iFactor Academy - Multi-Audience Landing Page

Multi-audience landing page for iFactor Academy & IFTV Network với 2 phiên bản:
- **One Sale Company** - Đào tạo cho cá nhân (B2C)
- **Business Sales Academy** - Đào tạo cho doanh nghiệp (B2B)

## Tech Stack

- **React 19** + **TypeScript** (strict)
- **Vite 6** (build & dev server)
- **React Router v7** (điều hướng multi-page SPA)
- **Tailwind CSS v4** (qua `@tailwindcss/vite`)
- **Lucide React** (icons)
- **Motion** (animation cho carousel `HowItWorks`)

## Cấu trúc thư mục

```
src/
├── main.tsx                      # Entry + React Router setup
├── index.css                     # Tailwind v4 + theme tokens
├── vite-env.d.ts                 # Type declarations cho assets
├── pages/
│   ├── HomeSelector.tsx          # Landing page chọn phiên bản (/)
│   ├── IndividualLanding.tsx     # Wrapper cho phiên bản cá nhân (/individual)
│   └── BusinessLanding.tsx       # Wrapper cho phiên bản doanh nghiệp (/business)
├── individual/                   # Components cho phiên bản cá nhân (B2C)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── StrategySection.tsx
│   ├── HowItWorks.tsx
│   ├── WhatYouLearn.tsx
│   ├── Coaches.tsx
│   ├── PivotIncludes.tsx
│   ├── AgentTrust.tsx
│   ├── PricingSection.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── types.ts                  # Data riêng cho cá nhân
│   └── assets/images/            # Ảnh coaches/testimonials
└── business/                     # Components cho phiên nghiệp (B2B)
    ├── Header.tsx
    ├── Hero.tsx
    ├── StrategySection.tsx
    ├── HowItWorks.tsx
    ├── WhatYouLearn.tsx
    ├── Coaches.tsx
    ├── PivotIncludes.tsx
    ├── AgentTrust.tsx
    ├── PricingSection.tsx
    ├── FAQ.tsx
    ├── Footer.tsx
    ├── types.ts                  # Data riêng cho doanh nghiệp
    └── assets/images/            # Ảnh coaches/testimonials
```

## Routes

- **`/`** - HomeSelector: Landing chọn giữa Individual và Business
- **`/individual`** - IndividualLanding: One Sale Company (cho sales cá nhân)
- **`/business`** - BusinessLanding: Business Sales Academy (cho doanh nghiệp)

## Chạy local

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build production

```bash
# Build cho GitHub Pages (repo path = /iFactorLandingPage/)
VITE_BASE="/iFactorLandingPage/" npm run build

# Build thường (root path /)
npm run build
```

Kết quả build nằm trong thư mục `dist/`.

## Deploy lên GitHub Pages

Repo hiện tại đã cấu hình GitHub Actions workflow tại `.github/workflows/deploy.yml`:

1. Push code lên branch `main`.
2. Workflow tự động build với `VITE_BASE="/iFactorLandingPage/"` rồi upload artifact lên GitHub Pages.
3. Vào **Settings → Pages** đảm bảo Source = **GitHub Actions**.

### Nếu repo đổi tên

Sửa cả 2 chỗ:
- `VITE_BASE` trong `.github/workflows/deploy.yml`
- Hằng `repoBase` trong `vite.config.ts`

## Lint / Type-check

```bash
npm run lint         # tsc --noEmit
```

## Live Demo

Website đang chạy tại: https://zankhuy.github.io/iFactorLandingPage/