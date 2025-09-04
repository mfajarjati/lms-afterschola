# LMS – Next.js Starter

LMS minimalis dengan Next.js (App Router), Mantine UI, Tailwind, Next-Auth, dan Prisma. Dirancang agar cepat di-setup, mudah di-scale.

## Fitur

- Auth (email/password) + role dasar (admin, instructor, student)
- CRUD Course/Module/Lesson (API route handler)
- Quiz sederhana (MCQ/essay) + penilaian dasar
- Progress tracking (enrollment & completion)
- Notifikasi ringan (toast) + struktur dashboard

## Tech Stack

Framework: Next.js, React, TypeScript  
UI: Mantine UI, TailwindCSS  
Auth: Next-Auth (Auth.js)  
Database & ORM: Prisma, PostgreSQL/MySQL/SQLite  
Validasi & Form: Zod, React-Hook-Form  
Realtime (opsional): Socket.IO / Supabase Realtime  
Storage (opsional): Supabase Storage / S3 / Firebase  
Pembayaran (opsional): Midtrans / Xendit

## Prasyarat

Node: ≥ 18  
Package manager: npm / yarn / pnpm / bun  
Database: Postgres (disarankan) atau SQLite untuk local

## Mulai Cepat

\`\`\`bash

# 1) install deps

pnpm install

# 2) salin env contoh

cp .env.example .env

# 3) jalankan migrasi prisma

pnpm prisma migrate dev

# 4) (opsional) seeding data awal

pnpm prisma db seed

# 5) run dev server

pnpm dev
\`\`\`
Buka [http://localhost:3000](http://localhost:3000)

## Variabel Lingkungan (.env)

\`\`\`env

# Database

DATABASE_URL="postgresql://user:pass@localhost:5432/lms"

# NextAuth

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="ganti_dengan_secret_aman"

# (opsional) Provider OAuth, Storage, Payment, dsb

/GOOGLE_CLIENT_ID=""

/GOOGLE_CLIENT_SECRET=""

/SUPABASE_URL=""

/SUPABASE_ANON_KEY=""

/XENDIT_SERVER_KEY=""

\`\`\`

## Struktur Proyek

\`\`\`bash
/app
/(auth) # login, register
/(dashboard) # admin, instructor, student
/api # route handlers: auth, courses, quizzes, progress
/components # ui components
/lib # utils: auth, db, validations
/prisma
schema.prisma
/styles
globals.css # Tailwind base
\`\`\`

## Skrip Penting

\`\`\`bash
pnpm dev # menjalankan dev server
pnpm build # build production
pnpm start # start production
pnpm lint # linting
pnpm prisma studio # GUI database
pnpm prisma migrate dev # migrasi skema
pnpm prisma db seed # seeding awal
\`\`\`

## Alur Data Inti

User → Enrollment → Course → Module → Lesson  
User → Attempt → Quiz → Question → Answer  
Progress tersimpan via tabel pivot (enrollment, completion, attempts).

## Gaya Kode

Type Safety: TypeScript wajib  
Styling: Tailwind untuk layout/utility, Mantine untuk komponen  
Form: React-Hook-Form + Zod resolver  
State: komponen lokal + server actions (minim client state global)

## Deploy (Vercel)

Build Command: \`pnpm build\`  
Install Command: \`pnpm install\`  
Env: set \`DATABASE_URL\`, \`NEXTAUTH_SECRET\`, \`NEXTAUTH_URL\`  
DB: gunakan Neon/Supabase/PlanetScale (atau RDS)  
Prisma: jalankan migrasi via CI/CD atau \`vercel build\` (turbo/edge menyesuaikan)

## Roadmap Singkat

- Auth OAuth (Google)
- Sertifikat (PDF + QR Verify)
- Role granular (permission per aksi)
- Import/Export CSV
- Integrasi pembayaran (Midtrans/Xendit)
- Live class (Socket.IO / HLS)

## Lisensi

MIT (sesuaikan kebutuhan).
