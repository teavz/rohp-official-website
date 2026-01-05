# ROHP Website - UC Berkeley Regents' Overnight Host Program

A modern, responsive website for UC Berkeley's Regents' Overnight Host Program (ROHP).

## Features

- **Homepage**: Welcoming landing page with program highlights, stats, and video showcase
- **Agenda Pages**: Detailed schedules for virtual and overnight programs
- **Registration**: In-site registration forms with waiver uploads and validation
- **FAQ**: Searchable accordion-style frequently asked questions
- **Housing Tours**: Video tours of UC Berkeley housing options
- **Committee**: Meet the team with modal profiles and contact options

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with UC Berkeley brand colors
- **UI Components**: shadcn/ui
- **Forms**: Client-side validation with server-side API routes
- **Database Ready**: API endpoints prepared for database integration

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Backend Integration

The website includes API routes ready for database integration:

- `/api/register` - Registration form submissions
- `/api/qna` - Q&A question submissions
- `/api/waitlist` - Waitlist registrations
- `/api/program-status` - Program availability status

To connect a database (Supabase, Neon, etc.):

1. Add your database credentials to environment variables
2. Implement database queries in the API routes
3. Add email sending functionality for confirmations
4. Implement file storage for waiver uploads (Vercel Blob, S3, etc.)

## UC Berkeley Branding

- Primary Blue: `#003262`
- California Gold: `#FDB515`

## Project Structure

```
app/
├── api/              # API routes for form submissions
├── agenda/           # Agenda pages (virtual & overnight)
├── committee/        # Committee member profiles
├── faq/              # FAQ page
├── housing/          # Housing tours page
├── registration/     # Registration page
└── page.tsx          # Homepage

components/
├── ui/               # shadcn/ui components
├── navigation.tsx    # Site navigation
├── footer.tsx        # Site footer
├── registration-form.tsx
├── qna-form.tsx
└── committee-member-modal.tsx
```

## License

© UC Berkeley ROHP. All rights reserved.
