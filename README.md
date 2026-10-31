# Nikey | High-Concept Luxury Streetwear Storefront

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20with-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com)

A high-performance, dark-minimalist, brutalist luxury streetwear e-commerce experience inspired by modern digital flagship stores. Re-engineered from the Nikey Shopify storefront into an ultra-fast, zero-dependency standalone web application with physics-based 3D interactions, rotational shoe orbit views, interactive runway lookbooks, mobile story reels, and an integrated client-side bag drawer.

---

## ⚡ Key Highlights & Architecture

- **56MB Performance Optimization**: Decomposed the monolithic 59MB base64-inlined export into 70 optimized standalone image assets (`assets/images/`), shrinking the initial HTML payload to ~690KB for near-instant first contentful paint (FCP).
- **Zero-Latency Standalone Cart Engine**: Intercepts native storefront `/cart` and `/cart/add.js` calls via a client-side reactive store persisted in `localStorage`.
- **Fluid Micro-Interactions**: Physics-driven spring animations, 360° rotational shoe orbital controls, clothing rack hover/drag physics, and lookbook pin hotspots.

---

## 👟 Interactive Showcase Sections

1. **Header & Navigation Drawer**
   - Brand typography with interactive search modal, bag count indicator with live reactive badge, and smooth anchor routing to each showcase zone.
2. **Mobile Stories (`mobile-shop-stories`)**
   - Instagram/TikTok-inspired reel cards with tap-to-view video previews, like counts, progress bars, and one-tap "Add to Bag".
3. **Scene Rail (`scene-rail` / Hand Rail Pro)**
   - Interactive horizontal streetwear rail featuring high-resolution transparent apparel renders with hover rotation, spring physics, and quick inspection.
4. **Rack Showcase (`rack-showcase`)**
   - Curated clothing rack display simulating physical garments hanging in a luxury boutique.
5. **The Runway (`runway-section`)**
   - Editorial lookbook ("Try the Look") with interactive hotspot pins (1, 2, 3) mapped directly to styled garments (Hoodie Black, Sweatshirts, Tatum Orbit sneakers).
6. **Shoe Orbit 360 (`ShoeOrbit`)**
   - 3D/rotational turntable showcase of the flagship **Luka 5** sneaker with active EU size selector (40–46) and instant bag checkout.
7. **Lumina Slider**
   - Radiant atmospheric slider with ambient illumination effects and high-impact typographic messaging.
8. **Slide-Out Bag Drawer & Instant Checkout**
   - Slide-out drawer with dynamic product list, live quantity increment/decrement, subtotal calculation, complimentary worldwide shipping, and order simulation confirmation modal.

---

## 📦 Product Catalog

The storefront includes complete product catalog definitions synced with real Shopify product IDs, handles, pricing, and variants:
- **Luka 5** ($149.00)
- **Air Jordan 12 Retro** ($149.00)
- **Tatum 5 Orbit** ($149.00)
- **Hoodie Black** ($199.00)
- **Sweatshirt Plus** ($199.00)
- **Hoodie** ($199.00)
- **Tshirt** ($199.00)
- **Sweatshirt** ($199.00)
- **Blazzer** ($199.00)

---

## 🚀 Local Development

To run locally without any dependencies:
```bash
# Using Python built-in HTTP server:
python -m http.server 3000

# Open in browser:
# http://localhost:3000
```

---

## 🌐 Deployment

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to GitHub
```bash
git init
git add .
git commit -m "feat: complete Nikey streetwear storefront"
gh repo create nikey-storefront --public --source=. --push
```
