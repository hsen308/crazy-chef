# 🍔 CRAZY CHEF - RESTAURANT WEBSITE

A modern, bilingual (English/Arabic) responsive website for Crazy Chef Lebanese Fast Food Restaurant.

## 📁 PROJECT STRUCTURE

```
crazy-chef-website/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🚀 QUICK START

1. **Extract all files** to a folder on your computer
2. **Open `index.html`** in a web browser
3. The website is ready to use!

## ✏️ CUSTOMIZATION GUIDE

### 1. REPLACING PLACEHOLDER IMAGES

#### Hero Background Image
**Location:** Line 62-67 in `index.html`

Replace the placeholder div with your image:
```html
<!-- BEFORE -->
<div class="image-placeholder hero-placeholder">
    <i class="fas fa-hamburger"></i>
    <p>Hero Background Image</p>
</div>

<!-- AFTER -->
<img src="images/hero-background.jpg" alt="Crazy Chef Restaurant">
```

#### Menu Item Images
**Location:** Throughout menu section (Lines 176-478 in `index.html`)

Replace placeholder divs with actual images:
```html
<!-- BEFORE -->
<div class="image-placeholder">
    <i class="fas fa-hamburger"></i>
</div>

<!-- AFTER -->
<img src="images/menu/burger-classic.jpg" alt="Crazy Classic Burger">
```

#### Gallery Images
**Location:** Lines 549-575 in `index.html`

Replace placeholder divs:
```html
<!-- BEFORE -->
<div class="image-placeholder">
    <i class="fas fa-image"></i>
    <p>Food Photo 1</p>
</div>

<!-- AFTER -->
<img src="images/gallery/food-1.jpg" alt="Delicious Food">
```

**Recommended image sizes:**
- Hero Background: 1920x1080px
- Menu Items: 600x400px
- Gallery: 800x600px

---

### 2. UPDATING CONTACT INFORMATION

**Phone & WhatsApp Number:**

Search for `+961 XX XXX XXX` and replace with your actual number:
- Navigation Order Button (Line 49)
- Hero WhatsApp Button (Line 77)
- All Menu Order Buttons
- Reservation Section (Lines 496-497)
- Footer (Line 676)
- Floating WhatsApp Button (Line 703)

**Email Address:**

Search for `contact@crazychef.com` and replace with your email:
- Line 40 (meta description can also be updated here)
- Footer (Line 677)

**Physical Address:**

Update on Line 630:
```html
<p data-en="Main Street, Sidon, Lebanon" data-ar="الشارع الرئيسي، صيدا، لبنان">
```

---

### 3. UPDATING GOOGLE MAPS LOCATION

**Location:** Line 651 in `index.html`

1. Go to [Google Maps](https://www.google.com/maps)
2. Find your restaurant location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the entire iframe tag with your code

**Alternative:** Just update the coordinates in the URL:
```
Current: pb=!1m18!1m12!1m3!1d52901.534621745746!2d35.350444!3d33.561044
Your Location: pb=!1m18!1m12!1m3!1d[ZOOM]!2d[LONGITUDE]!3d[LATITUDE]
```

---

### 4. EDITING MENU ITEMS

**Location:** Lines 176-478 in `index.html`

**To Edit an Existing Item:**
1. Find the menu item
2. Update the name in both `data-en` and `data-ar` attributes
3. Update the price in the `<span class="price">` tag
4. Update the description in both languages

**To Add a New Item:**
Copy this template and modify:
```html
<div class="menu-item" data-category="burgers">
    <div class="menu-item-image">
        <img src="images/menu/your-item.jpg" alt="Your Item">
    </div>
    <div class="menu-item-content">
        <div class="menu-item-header">
            <h3 data-en="Your Item Name" data-ar="اسم المنتج">Your Item Name</h3>
            <span class="price">$9.99</span>
        </div>
        <p class="menu-item-desc" data-en="Description in English" data-ar="الوصف بالعربية">Description in English</p>
        <a href="https://wa.me/961XXXXXXXX?text=I'd%20like%20to%20order%20Your%20Item" class="menu-order-btn" target="_blank">
            <i class="fab fa-whatsapp"></i> <span data-en="Order" data-ar="اطلب">Order</span>
        </a>
    </div>
</div>
```

**Menu Categories:**
- `burgers`
- `sandwiches`
- `fries`
- `snacks`
- `drinks`

---

### 5. UPDATING OPENING HOURS

**Location:** Lines 615-622 in `index.html`

Update the hours:
```html
<div class="hour-item">
    <span data-en="Every Day" data-ar="كل يوم">Every Day</span>
    <span class="time">2:00 PM - 10:00 PM</span>
</div>
```

To add different hours for different days:
```html
<div class="hour-item">
    <span data-en="Monday - Friday" data-ar="الإثنين - الجمعة">Monday - Friday</span>
    <span class="time">12:00 PM - 10:00 PM</span>
</div>
<div class="hour-item">
    <span data-en="Saturday - Sunday" data-ar="السبت - الأحد">Saturday - Sunday</span>
    <span class="time">2:00 PM - 11:00 PM</span>
</div>
```

---

### 6. EDITING CUSTOMER REVIEWS

**Location:** Lines 596-661 in `index.html`

Update or add reviews by modifying the review cards:
```html
<div class="review-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i> <!-- For half star -->
    </div>
    <p class="review-text" data-en="English review text" data-ar="نص المراجعة بالعربية">English review text</p>
    <div class="reviewer">
        <strong>Customer Name</strong>
        <span data-en="Customer Title" data-ar="صفة العميل">Customer Title</span>
    </div>
</div>
```

---

### 7. TRANSLATING CONTENT TO ARABIC

Every text element has two attributes:
- `data-en` for English text
- `data-ar` for Arabic text

**Example:**
```html
<h2 data-en="Our Menu" data-ar="قائمتنا">Our Menu</h2>
```

The language switcher will automatically toggle between these.

**To update translations:**
1. Find the element you want to translate
2. Update the `data-ar` attribute with your Arabic text
3. Make sure to keep the `data-en` attribute as well

---

### 8. CHANGING COLORS

**Location:** Lines 7-26 in `styles.css`

All colors are defined as CSS variables:
```css
:root {
    --primary-red: #E63946;    /* Main red color */
    --dark-red: #C62F3A;       /* Darker red for hovers */
    --white: #FFFFFF;          /* White color */
    /* ... more colors ... */
}
```

**To change the brand colors:**
1. Update `--primary-red` with your preferred red
2. Update `--white` with your white/cream color
3. The entire site will automatically update

---

### 9. SOCIAL MEDIA LINKS

**Location:** Lines 670-673 in `index.html`

Update the social media links:
```html
<div class="social-links">
    <a href="https://facebook.com/your-page" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
    <a href="https://instagram.com/your-page" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="https://twitter.com/your-page" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
    <a href="https://wa.me/961XXXXXXXX" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
</div>
```

---

### 10. LOGO CUSTOMIZATION

**Current Logo:** Text-based "CRAZY CHEF"

**To replace with an image logo:**

**Location:** Lines 43-46 in `index.html`

Replace:
```html
<!-- BEFORE -->
<div class="logo">
    <span class="logo-crazy">CRAZY</span>
    <span class="logo-chef">CHEF</span>
</div>

<!-- AFTER -->
<div class="logo">
    <img src="images/logo.png" alt="Crazy Chef Logo" style="height: 50px;">
</div>
```

Also update the footer logo (Line 667).

---

## 🎨 DESIGN FEATURES

### ✅ What's Included:
- Fully responsive (mobile, tablet, desktop)
- Bilingual (English/Arabic) with instant switching
- Smooth animations and transitions
- Sticky navigation bar
- WhatsApp integration for orders and reservations
- Interactive menu filtering
- Image gallery with lightbox
- Google Maps integration
- Customer reviews section
- Floating WhatsApp button
- SEO optimized with meta tags
- Fast loading with optimized CSS

### 📱 Mobile Features:
- Hamburger menu for mobile navigation
- Touch-friendly buttons
- Optimized font sizes
- Responsive images
- Mobile-first design approach

---

## 🔧 TECHNICAL DETAILS

### Libraries Used:
- **Google Fonts:** Bebas Neue, Righteous, Poppins
- **Font Awesome 6.4.0:** For icons
- **No jQuery or heavy frameworks** - Pure vanilla JavaScript

### Browser Support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance:
- Lightweight (< 100KB total)
- Fast loading
- Optimized animations
- Lazy loading ready

---

## 📝 MAINTENANCE TIPS

1. **Regular Updates:**
   - Update menu items seasonally
   - Refresh customer reviews monthly
   - Update gallery images regularly

2. **Image Optimization:**
   - Use WebP format for better compression
   - Compress images before uploading
   - Use appropriate image sizes

3. **Testing:**
   - Test on multiple devices
   - Check both languages work correctly
   - Verify all WhatsApp links work
   - Test the reservation form

4. **SEO:**
   - Update meta descriptions regularly
   - Add alt text to all images
   - Keep content fresh and updated

---

## 🚀 GOING LIVE

### Option 1: Simple Hosting (Recommended for beginners)
1. Upload all files to hosting provider (Netlify, Vercel, GitHub Pages)
2. Point your domain to the hosting
3. Done!

### Option 2: Traditional Web Hosting
1. Get a hosting account (shared hosting is fine)
2. Upload files via FTP/cPanel File Manager
3. Visit your domain

### Popular Free Hosting Options:
- **Netlify** - netlify.com (Recommended)
- **Vercel** - vercel.com
- **GitHub Pages** - pages.github.com
- **Render** - render.com

---

## ❓ COMMON QUESTIONS

**Q: How do I add more menu categories?**
A: Add a new button in the menu tabs section and assign items the matching `data-category`.

**Q: Can I change the fonts?**
A: Yes! Update the Google Fonts link in `index.html` and the CSS variables in `styles.css`.

**Q: How do I make the WhatsApp number work?**
A: Replace `961XXXXXXXX` with your WhatsApp number in international format (country code + number, no + or spaces).

**Q: The Arabic text looks weird. What's wrong?**
A: Make sure you're using an Arabic-compatible font and the text is properly encoded (UTF-8).

**Q: Can I add online ordering/payment?**
A: Yes, but you'll need to integrate a third-party service like Square, Stripe, or a food delivery platform API.

---

## 📞 NEED HELP?

If you need assistance customizing this website:

1. Check this README thoroughly
2. Look for the specific section you want to modify
3. Follow the instructions carefully
4. Test changes in a browser after each modification

---

## 📄 LICENSE

This template is provided as-is for your restaurant use. Feel free to modify and customize it to match your brand.

---

## 🎉 FINAL NOTES

This website is designed to be:
- **Easy to customize** - No coding knowledge required for basic changes
- **Fast & lightweight** - Optimized for performance
- **Mobile-friendly** - Looks great on all devices
- **Conversion-focused** - Designed to get more orders

**Good luck with your restaurant! 🍔**

---

*Last Updated: February 2026*
