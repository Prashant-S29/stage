# Stage

A modern web-based canvas editor for creating visual designs. Add images, text, and backgrounds to create stunning graphics that you can export in high quality.

## What is Stage?

Stage is a canvas editor that runs in your web browser. Think of it like a simple version of Photoshop or Canva - you can:

- Upload images and add them to your canvas
- Add text overlays with custom fonts and colors
- Change backgrounds (solid colors, gradients, or images)
- Resize, move, and rotate everything
- Export your designs as PNG or JPG files

## Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Setup

1. Create `.env.local` with:
   - `DATABASE_URL` - PostgreSQL connection string
   - `BETTER_AUTH_SECRET` - Generate with: `openssl rand -base64 32`
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name (optional)
   - `CLOUDINARY_API_KEY` - Cloudinary API key (optional)
   - `CLOUDINARY_API_SECRET` - Cloudinary API secret (optional)
   - `GOOGLE_CLIENT_ID` - Google OAuth ID (optional)
   - `GOOGLE_CLIENT_SECRET` - Google OAuth secret (optional)

2. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

## Usage

- **Upload**: Add images to your canvas
- **Text**: Add text overlays
- **Background**: Set solid colors, gradients, or images
- **Transform**: Drag to move, resize, or rotate
- **Export**: Download as PNG or JPG

## Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **Konva** - Canvas rendering engine
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Cloudinary** - Image optimization and CDN

## Project Structure

```
stage/
├── app/              # Next.js pages and routes
├── components/       # React components
│   ├── canvas/      # Canvas editor components
│   ├── landing/     # Landing page sections
│   └── ui/          # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and constants
└── types/           # TypeScript type definitions
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Default Settings

- Canvas size: 1920 × 1080 pixels
- Max image size: 10MB
- Supported formats: JPEG, PNG, WebP

## License

See [LICENSE](LICENSE) file for details.
