# Vytal Future Marketing Website

A modern, SEO-optimized Next.js marketing website for Vytal Future — personalized health optimization platform.

## Features

- ✨ Modern, responsive design
- 🎨 Custom gradient animations and transitions
- 📱 Mobile-first approach
- 🔍 SEO-optimized with Next.js metadata
- 🚀 Built for Vercel deployment
- 🔐 Ready for authentication integration
- ♿ Accessible component structure

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS3 with CSS Variables
- **Fonts**: Google Fonts (Rajdhani, DM Sans, DM Mono)
- **Deployment**: Vercel

## Getting Started Locally

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd vytal-future
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Step 1: Create a GitHub Account (if you don't have one)
- Go to [github.com](https://github.com)
- Sign up for a free account
- Remember your username and password

### Step 2: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `vytal-future`
3. Description: "Vytal Future Marketing Website"
4. Choose "Public" (easier for Vercel)
5. Click "Create repository"

### Step 3: Initialize Git and Push Your Code

In your terminal (in the vytal-future folder):

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Vytal Future marketing website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/vytal-future.git

# Push to GitHub (may ask for password/token)
git branch -M main
git push -u origin main
```

### Step 4: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### Step 5: Deploy to Vercel

1. After signing in to Vercel, click "Add New Project"
2. Select "Import Git Repository"
3. Find and select `vytal-future` repository
4. Click "Import"
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete
7. You'll get a live URL like `https://vytal-future.vercel.app`

## Custom Domain Setup (Optional)

If you have a domain (like vytalfuture.com):

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow Vercel's DNS instructions
5. Update your domain's nameservers or DNS records

## Environment Variables

Currently, no environment variables are required. When you add backend authentication:

1. Create a `.env.local` file in the root:
   ```
   NEXT_PUBLIC_API_URL=https://your-api.com
   ```

2. Update the login modal to connect to your Python backend

## Making Changes

### To update the website:

1. Edit files in the `app/` directory
2. Save changes
3. Test locally with `npm run dev`
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push
   ```
5. Vercel auto-deploys on every push!

## Connecting Your Backend

The login modal is ready to connect to your Python API. Update `app/page.js` in the login form submission:

```javascript
// In the login form, add:
const handleLogin = async (email, password) => {
  const response = await fetch('https://your-api.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  const data = await response.json()
  // Redirect to dashboard on success
}
```

## SEO Optimization

Already implemented:
- ✅ Metadata with title, description, keywords
- ✅ Open Graph tags for social sharing
- ✅ Twitter card tags
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast loading with Next.js optimizations

To further optimize:
- Add blog section (helps with SEO)
- Create XML sitemap at `public/sitemap.xml`
- Add structured data (JSON-LD)
- Monitor Google Search Console

## File Structure

```
vytal-future/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main homepage
│   └── globals.css        # All CSS styles
├── public/                # Static assets (add logo, images here)
├── package.json           # Dependencies
├── next.config.js         # Next.js config
├── jsconfig.json          # JS path aliases
└── .gitignore            # Git ignore rules
```

## Support

For issues with:
- **Vercel deployment**: Check [vercel.com/docs](https://vercel.com/docs)
- **Next.js**: Check [nextjs.org/docs](https://nextjs.org/docs)
- **Git/GitHub**: Check [github.com/git-tips](https://github.com/git-tips/tips)

---

**Ready to launch?** Start with Step 1 of the Deployment section above!
