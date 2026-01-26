# OCF to Vercel Display Setup

This setup displays your Vercel website content while keeping the OCF URL in the browser address bar.

## Setup Instructions

### Step 1: Get Your Vercel URL
1. Go to your Vercel dashboard
2. Find your project
3. Copy the deployment URL (e.g., `https://rohp-website.vercel.app` or your custom domain)

### Step 2: Update index.html
Replace `YOUR_VERCEL_URL` in `index.html` with your actual Vercel URL:
- Line 48: In the iframe `src` attribute
- Line 60: In the error fallback link

### Step 3: Upload to OCF
1. Connect to your OCF account via SFTP or SSH
2. Navigate to your `public_html` directory
3. Upload `index.html` (this is the main file you need)

### Step 4: Test
Visit your OCF URL:
- `https://www.ocf.berkeley.edu/~yourusername`
- `https://ocf.io/yourusername`

You should see your Vercel site content, but the URL bar will still show the OCF address.

## How It Works

### Method: Iframe (Current Setup)
- **How**: The OCF page contains an iframe that loads your Vercel site
- **URL**: Stays as OCF URL (e.g., `ocf.io/yourusername`)
- **Content**: Displays Vercel site inside the iframe
- **Pros**: Simple, works immediately, no server configuration needed
- **Cons**: 
  - URL in address bar doesn't change when navigating (stays as OCF URL)
  - Some sites block iframe embedding (X-Frame-Options header)
  - SEO may be slightly affected (but content is still visible)

### Alternative: Apache Reverse Proxy (Advanced)
If OCF allows `mod_proxy`, you can use Apache's ProxyPass feature:
1. Uncomment the ProxyPass lines in `.htaccess`
2. Replace `YOUR_VERCEL_URL` with your Vercel URL
3. Upload `.htaccess` to `public_html`
4. Set permissions: `chmod 644 .htaccess`

**Note**: OCF may not allow ProxyPass for security reasons. The iframe method is more reliable.

## Troubleshooting

### Iframe not loading / blank page?
1. **Check Vercel X-Frame-Options**: Vercel might block iframe embedding
   - Solution: You may need to configure Vercel headers to allow framing
   - Or use the ProxyPass method if available

2. **Check browser console**: Open DevTools (F12) and check for errors
   - Common error: "Refused to display in a frame because it set 'X-Frame-Options' to 'deny'"

3. **Test Vercel URL directly**: Make sure `https://YOUR_VERCEL_URL` works in a regular browser tab

### Content not displaying correctly?
- The iframe should be fullscreen, but some responsive designs might need adjustment
- Check if your Vercel site uses any features that don't work in iframes

### Want to allow iframe embedding on Vercel?
If you control the Vercel deployment, you can add headers to allow framing:
- In `next.config.mjs`, add headers configuration
- Or use Vercel's header configuration in dashboard

## Important Notes

1. **URL Navigation**: When users click links in the iframe, the OCF URL stays the same. The iframe content changes, but the address bar doesn't update.

2. **SEO Considerations**: Search engines can still index the content, but the canonical URL will be the OCF one.

3. **Mobile Compatibility**: The iframe is responsive and should work on mobile devices.

4. **Performance**: The iframe adds a small overhead, but Vercel's CDN still serves content quickly.

## Custom Domain Setup

If you have a custom domain through OCF (e.g., `rohp.studentorg.berkeley.edu`):

1. **Use the same iframe method**: Upload `index.html` to your custom domain's `public_html`
2. **Or point DNS to Vercel**: Configure the domain in Vercel and point DNS there (then you don't need OCF hosting)
