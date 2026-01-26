# OCF App Hosting Deployment Guide

This guide shows how to deploy your Next.js site as a Node.js application on OCF's app hosting.

## Prerequisites

- OCF group account (not individual account)
- Virtual host domain (e.g., `rohp.studentorg.berkeley.edu`)
- App hosting request approved by OCF
- SSH access to app server: `apphost.ocf.berkeley.edu`

## Step 1: Request App Hosting

Email `hostmaster@ocf.berkeley.edu` with:
- Group's account name
- Current website (if any)
- Desired domain name
- Technologies: Node.js, Next.js

**Note**: OCF mentions Node.js 12, but you can use `nvm` to install Node.js 18+ locally.

## Step 2: Install Node.js via nvm

Once you have app hosting access, SSH to the app server:

```bash
ssh username@apphost.ocf.berkeley.edu
```

Install Node.js 18+ using nvm:

```bash
# Install nvm if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# Install Node.js 18
nvm install 18
nvm use 18
nvm alias default 18
```

## Step 3: Upload Your Code

Upload your Next.js project to the app server:

```bash
# Create app directory
mkdir -p ~/rohp-app
cd ~/rohp-app

# Upload your code (via git, scp, or rsync)
# For example, if using git:
git clone https://github.com/DT-0907/rohp-website.git .
```

## Step 4: Install Dependencies

```bash
cd ~/rohp-app
npm install
```

## Step 5: Configure Next.js for UNIX Socket

Create a custom server script that binds to the OCF UNIX socket:

**File: `~/rohp-app/server.js`**
```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const socketPath = '/srv/apps/username/username.sock'

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  // Remove socket if it exists
  if (fs.existsSync(socketPath)) {
    fs.unlinkSync(socketPath)
  }

  server.listen(socketPath, (err) => {
    if (err) throw err
    console.log(`> Ready on ${socketPath}`)
  })
})
```

**Update `package.json`** to use the custom server:
```json
{
  "scripts": {
    "start": "NODE_ENV=production node server.js"
  }
}
```

## Step 6: Build the Application

```bash
npm run build
```

## Step 7: Create Startup Script

**File: `~/rohp-app/run`**
```bash
#!/bin/sh -e
cd ~/rohp-app
exec npm start
```

Make it executable:
```bash
chmod +x ~/rohp-app/run
```

## Step 8: Create systemd Service

**File: `~/.config/systemd/user/rohp-app.service`**
```ini
[Unit]
Description=ROHP Website
ConditionHost=vampires

[Install]
WantedBy=default.target

[Service]
ExecStart=/home/{U}/{UU}/{USERNAME}/rohp-app/run
Restart=always
WorkingDirectory=/home/{U}/{UU}/{USERNAME}/rohp-app
Environment=NODE_ENV=production
```

Replace:
- `{U}` = first letter of username
- `{UU}` = first two letters of username  
- `{USERNAME}` = full username

## Step 9: Enable and Start Service

```bash
systemctl --user enable rohp-app
systemctl --user start rohp-app
```

## Step 10: Check Status

```bash
# Check if running
systemctl --user status rohp-app

# View logs
journalctl --user -u rohp-app -n 50
```

## Troubleshooting

### App won't start
- Check logs: `journalctl --user -u rohp-app -n 100`
- Verify socket path is correct
- Check Node.js version: `node --version` (should be 18+)

### Permission errors
- Make sure socket directory exists: `/srv/apps/username/`
- Check file permissions

### Port conflicts
- OCF uses UNIX sockets, not ports - make sure you're using the socket path

## Useful Commands

```bash
# Restart app
systemctl --user restart rohp-app

# Stop app
systemctl --user stop rohp-app

# Start app
systemctl --user start rohp-app

# View logs
journalctl --user -u rohp-app -f
```

## Notes

- ⚠️ Requires app hosting approval (not automatic)
- ⚠️ More complex setup than static export
- ✅ Full Next.js features (SSR, API routes, etc.)
- ✅ Automatic restarts on server reboot
- ✅ Better for dynamic content

## Recommendation

**Use static export instead** unless you specifically need:
- Server-side rendering
- API routes
- Dynamic server features

Since you're using Google Forms, static export is simpler and works perfectly!
