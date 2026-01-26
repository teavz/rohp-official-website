# Uploading to OCF public_html

## Method 1: Using SCP (from your local machine)

**Step 1:** Build your site locally (if not already done)
```bash
cd /Users/delberttran/Documents/rohp-website-master/rohp-website-redesign
npm run build
```

**Step 2:** Upload the `out` folder contents to OCF
```bash
# From your local machine, run:
scp -r out/* rohp@ssh.ocf.berkeley.edu:~/public_html/
```

This will upload all files from the `out/` directory to your OCF `public_html`.

## Method 2: Using rsync (better for updates)

```bash
# From your local machine:
rsync -avz --delete out/ rohp@ssh.ocf.berkeley.edu:~/public_html/
```

The `--delete` flag removes files on the server that don't exist locally (keeps it in sync).

## Method 3: Using SFTP client

1. Use an SFTP client like:
   - **macOS**: Cyberduck, FileZilla, or built-in Finder (Cmd+K → `sftp://ssh.ocf.berkeley.edu`)
   - **Windows**: WinSCP, FileZilla
   - **Linux**: FileZilla, or use `sftp` command

2. Connect to:
   - Host: `ssh.ocf.berkeley.edu`
   - Username: `rohp`
   - Protocol: SFTP

3. Navigate to `public_html` and upload all files from your local `out/` folder.

## Method 4: Build on the server (if Node.js is available)

**On the OCF server:**
```bash
# Clone your repo (if not already there)
cd ~
git clone https://github.com/DT-0907/rohp-website.git rohp-website-build
cd rohp-website-build

# Install dependencies
npm install

# Build
npm run build

# Copy to public_html
cp -r out/* ~/public_html/
```

## Verify Upload

After uploading, check on the server:
```bash
# On OCF server (in your SSH session):
cd ~/public_html
ls -la

# You should see:
# - index.html
# - _next/ (directory)
# - agenda/ (directory)
# - etc.
```

## Set Permissions (if needed)

If files aren't accessible, set permissions:
```bash
# On OCF server:
chmod -R 755 ~/public_html
chmod 644 ~/public_html/*.html
```

## Test Your Site

Visit:
- `https://www.ocf.berkeley.edu/~rohp`
- `https://ocf.io/rohp`

Your site should be live!
