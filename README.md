# AgentleConsulting.com

> Automation with a Human Hand — Website for AgentleConsulting

**Tech Stack:** Astro 5 + Tailwind CSS + Netlify

---

## 🔧 Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Netlify Deployment

### Option 1: Connect GitHub Repo (Recommended)

1. Push this repo to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click **Add new site → Import an existing project**
4. Select this repo
5. Netlify auto-detects the `netlify.toml` build settings
6. Click **Deploy**

### Option 2: Deploy via CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 🔗 Domain Connection (agentleconsulting.com)

Once deployed to Netlify:

1. In Netlify dashboard → **Site settings → Domain management**
2. Click **Add custom domain**
3. Enter `agentleconsulting.com`
4. Netlify provides DNS records to add in **GoDaddy**:
   - **A record:** `@` → `75.2.60.5` (Netlify load balancer)
   - **CNAME:** `www` → `[your-site-name].netlify.app`
5. In GoDaddy DNS settings, update the records
6. Wait 24–48h for propagation

Or use Netlify's managed DNS for faster propagation:
1. In Netlify → **Domain management → Nameservers**
2. Change GoDaddy nameservers to Netlify's nameservers

---

## ⚙️ Configuration Before Launch

### 1. Calendly Embed
Replace `YOUR_CALENDLY_USERNAME` in:
- `src/pages/contact.astro` ( Calendly embed section — uncomment the actual embed div and remove the placeholder)

### 2. GA4 Tracking
Replace `YOUR_GA4_ID` with your actual Google Analytics 4 Measurement ID in:
- `src/layouts/Layout.astro` (head section — replace `YOUR_GA4_ID`)

### 3. Contact Form (Netlify Forms)
The form in `src/pages/contact.astro` uses client-side JS submission. For Netlify Forms:
- Add `data-netlify="true"` to the `<form>` element
- Or use a backend service like Formspree or EmailJS

### 4. Seller Logo Strip
Replace placeholder logo text blocks in `src/pages/index.astro` with actual seller logos:
- Social proof bar section (~line 60–70)

### 5. Team Photos
Replace placeholder team member cards in `src/pages/about.astro` with real photos.

---

## 📁 Site Structure

```
src/
  layouts/
    Layout.astro          # Base layout with SEO, GA4, cookie consent
  components/
    Nav.astro             # Sticky navigation
    Footer.astro          # Footer with columns
    CookieConsent.astro   # GDPR-compliant cookie banner
  pages/
    index.astro           # Home page
    about.astro           # About / brand story
    services/index.astro  # Services overview + tier comparison
    contact.astro         # Contact + Calendly + form
    case-studies.astro     # Portfolio grid
    blog/
      index.astro         # Blog listing
      automate-inventory-n8n.astro
      amazon-automation-priority.astro
    legal/
      privacy.astro
      terms.astro
      cookies.astro
public/
  favicon.svg             # Gentle Signal "a" mark
```

---

## 🎨 Brand Specs

| Element | Value |
|---------|-------|
| Primary | Sage Leaf `#6B9E78` |
| Accent | Warm Amber `#D4956A` |
| Text | Deep Slate `#2D3A45` |
| Background | Warm Cream `#F8F5F0` |
| Surface | Soft Stone `#EDE9E2` |
| Heading Font | Fraunces |
| Body Font | Plus Jakarta Sans |
| Mono Font | JetBrains Mono |

---

## 📊 Lighthouse Targets

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## 🔒 Security Notes

- No hardcoded secrets in this repo
- Use `.env` for any API keys and reference via `import.meta.env`
- GA4 ID and Calendly username are placeholders — replace before launch
- Cookie consent is GDPR-compliant and stores preferences via cookie

---

Built with ❤️ by AgentleConsulting · Amsterdam, Netherlands
