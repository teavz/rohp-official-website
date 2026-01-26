# Updating Your OCF Website

When you make changes (photos, committee members, content, etc.), follow these exact steps:

## Step 1: Make Your Changes Locally

Edit files in your local project:
- Update photos: Replace files in `public/` folder
- Update committee members: Edit `app/committee/page.tsx` or committee data
- Update any other content: Edit the relevant files

## Step 2: Build the Static Site

**On your local machine:**
```bash
cd /Users/delberttran/Documents/rohp-website-master/rohp-website-redesign
npm run build
```

Wait for the build to complete. This creates/updates the `out/` folder.

## Step 3: Upload to OCF

**Option A: Using SCP (from your local machine)**
```bash
scp -r out/* rohp@ssh.ocf.berkeley.edu:~/public_html/
```

**Option B: Using rsync (recommended - only uploads changed files)**
```bash
rsync -avz --delete out/ rohp@ssh.ocf.berkeley.edu:~/public_html/
```

The `rsync` command is better because it:
- Only uploads files that changed (faster)
- Deletes files on server that no longer exist locally
- Shows progress

## Step 4: Verify (Optional)

**SSH to OCF and check:**
```bash
ssh rohp@ssh.ocf.berkeley.edu
cd ~/public_html
ls -la
```

## Step 5: Test

Visit your website:
- `https://www.ocf.berkeley.edu/~rohp`
- `https://ocf.io/rohp`

---

## Quick Copy-Paste Commands

**Full update process (copy all at once):**
```bash
cd /Users/delberttran/Documents/rohp-website-master/rohp-website-redesign && \
npm run build && \
rsync -avz --delete out/ rohp@ssh.ocf.berkeley.edu:~/public_html/
```

Or if you prefer SCP:
```bash
cd /Users/delberttran/Documents/rohp-website-master/rohp-website-redesign && \
npm run build && \
scp -r out/* rohp@ssh.ocf.berkeley.edu:~/public_html/
```

---

## Common Updates

### Update Photos
1. Replace image files in `public/` folder
2. Run build + upload commands above

### Update Committee Members
1. Edit `app/committee/page.tsx` or committee data file
2. Run build + upload commands above

### Update Content/Text
1. Edit the relevant page file (e.g., `app/page.tsx`, `app/faq/page.tsx`)
2. Run build + upload commands above

### Update Registration Form Link
1. Edit `components/registration-trigger.tsx` (change the Google Form URL)
2. Run build + upload commands above

---

## Notes

- ✅ Always run `npm run build` after making changes
- ✅ The `out/` folder is regenerated each time (old files are replaced)
- ✅ You can use `rsync` or `scp` - both work fine
- ✅ No need to delete old files manually - the build + upload replaces everything
- ⚠️ Make sure you're in the `rohp-website-redesign` directory when running commands

Quick steps
1. Check your public_html (on the OCF server)
In your current SSH session, run:
cd ~/public_html
ls -la
cd ~/public_htmlls -la
This shows what's currently in your public_html.
2. Upload from your local machine
Open a new terminal on your Mac (keep the SSH session open) and run:
# First, make sure you've built the site:
cd /Users/delberttran/Documents/rohp-website-master/rohp-website-redesign
npm run build

# Then upload everything from the 'out' folder:
scp -r out/* rohp@ssh.ocf.berkeley.edu:~/public_html/
# First, make sure you've built the site:cd /Users/delberttran/Documents/rohp-website-master/rohp-website-redesignnpm run build# Then upload everything from the 'out' folder:scp -r out/* rohp@ssh.ocf.berkeley.edu:~/public_html/
This uploads all files from your local out/ folder to OCF's public_html.
3. Verify on the server
Back in your SSH session:
cd ~/public_html
ls -la
cd ~/public_htmlls -la
You should see index.html, _next/, and other folders.
4. Set permissions (if needed)
chmod -R 755 ~/public_html
chmod 644 ~/public_html/*.html
chmod -R 755 ~/public_htmlchmod 644 ~/public_html/*.html
5. Test
Visit:
https://www.ocf.berkeley.edu/~rohp
https://ocf.io/rohp
Alternative: If you prefer using a GUI, you can use Finder on macOS:
Press Cmd+K (or Go → Connect to Server)
Enter: sftp://ssh.ocf.berkeley.edu
Connect with username rohp
Navigate to public_html and drag files from your local out/ folder
I've created a detailed guide in ocf-deployment/UPLOAD-INSTRUCTIONS.md with all methods.