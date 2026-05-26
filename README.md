# Utkarsh Agency Portfolio

Premium frontend portfolio website for a boutique web systems and AI integration studio.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide icons
- CSS-only motion
- WhatsApp contact flow

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Check

```bash
npm run build
npm run start -- --port 3000
```

## Contact Setup

Create `.env.local` and add:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=hello@example.com
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.me/910000000000
```

For WhatsApp, use country code plus number. Do not include spaces, dashes, brackets, or `+`.

## GitHub Upload

Commit these source files and folders:

```text
app/
components/
docs/
lib/
.env.example
.gitignore
README.md
eslint.config.mjs
next.config.ts
package-lock.json
package.json
postcss.config.mjs
tailwind.config.ts
tsconfig.json
```

Do not upload:

```text
node_modules/
.next/
.env.local
```

Those are ignored by Git.

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Add the same public environment variables in Vercel settings.
4. Deploy as a Next.js project.
