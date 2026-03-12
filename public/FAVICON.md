# Favicon Setup

To add a favicon to your 10Q Designs site:

1. **Add your favicon file** to this `/public` folder:
   - Name it `favicon.ico` (recommended for broad compatibility)
   - Or use `icon.png` / `icon.svg` for modern browsers

2. **Supported formats:**
   - `favicon.ico` — Classic format, works everywhere
   - `icon.png` — PNG format (e.g., 32x32 or 48x48)
   - `apple-touch-icon.png` — For iOS home screen (180x180 recommended)

3. **The layout is already configured** to use `/favicon.ico` from the public folder. Next.js will automatically serve files from `/public` at the root URL.

4. **Optional:** For advanced favicon configuration, update `src/app/layout.tsx`:
   ```ts
   icons: {
     icon: "/favicon.ico",
     apple: "/apple-touch-icon.png",
   },
   ```
