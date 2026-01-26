# OCF Static Export Deployment Guide

This guide shows how to deploy your Next.js site as static files to OCF's regular web hosting (no app hosting needed).

## Prerequisites

- Node.js 18+ installed on your local machine (for building)
- OCF account with `public_html` directory
- SFTP/SSH access to OCF

## Step 1: Build Static Site Locally

On your local machine, in the `rohp-website-redesign` directory:

```bash
# Install dependencies (if not already done)
npm install

# Build static export
npm run build
```

This will create an `out/` directory with all static files.

## Step 2: Upload to OCF

1. **Connect to OCF via SFTP or SSH**
   - Host: `ssh.ocf.berkeley.edu` (for SFTP)
   - Or use SSH: `ssh username@ssh.ocf.berkeley.edu`

2. **Navigate to your public_html directory**
   ```bash
   cd ~/public_html
   ```

3. **Upload all files from the `out/` directory**
   - Upload everything inside `out/` to `public_html/`
   - Make sure `index.html` is in the root of `public_html`

4. **Set proper permissions** (if needed)
   ```bash
   chmod -R 755 ~/public_html
   chmod 644 ~/public_html/*.html
   ```

## Step 3: Test

Visit your OCF URL:
- `https://www.ocf.berkeley.edu/~yourusername`
- `https://ocf.io/yourusername`

Your site should be live!

## Updating the Site

Whenever you make changes:

1. Build locally: `npm run build`
2. Upload the new `out/` directory contents to OCF `public_html`
3. Done!

## Notes

- ✅ No app hosting request needed
- ✅ Works with regular OCF web hosting
- ✅ No Node.js version conflicts
- ✅ Fast and simple
- ⚠️ No server-side features (but you don't need them - using Google Forms)

## Troubleshooting

### 404 errors on navigation
- Make sure `trailingSlash: true` is in `next.config.mjs` (already added)
- Check that all files were uploaded correctly

### Images not loading
- Verify images are in the `out/` directory
- Check file paths are correct

### Styling broken
- Make sure CSS files were uploaded
- Clear browser cache
