# SiMungil - Responsive Design Guide

## Optimisasi Mobile-First untuk Ibu-Ibu Pengguna

Aplikasi SiMungil telah dioptimalkan sepenuhnya untuk penggunaan di smartphone dengan tampilan yang jelas dan mudah digunakan, serta tetap responsif di desktop.

---

## 📱 Breakpoint yang Digunakan

```
- Mobile (xs):    < 640px   (default)
- Tablet (sm):    640px+    (landscape phone, small tablet)
- Medium (md):    768px+    (iPad, tablet)
- Desktop (lg):   1024px+   (laptop)
- XL (xl):        1280px+   (desktop)
```

---

## 🎯 Komponen yang Dioptimalkan

### 1. **Logo Section** (Kepala Halaman)
**Desktop (md+):**
- 4 logo dalam satu baris horizontal dengan spacing rapi
- Logo lebih besar (w-16 h-16)
- Deskripsi jelas di bawah setiap logo

**Mobile (< md):**
- 3 logo dalam satu baris (grid 3 kolom)
- Logo lebih kecil (w-12 h-12)
- Text lebih kecil tapi tetap readable
- Padding dioptimalkan (p-2 md:p-3)

**Fitur:**
- Sticky positioning agar logo terlihat saat scroll
- Hover effects untuk interaktivitas
- Background blur untuk modern look
- **3 Logo Section:**
  - Logo KKN (Kelompok 2)
  - Logo Kampus
  - Logo SiMungil (Aplikasi)

### 2. **Header Section**
**Mobile:**
- H1 text: `text-2xl` (dari 3xl)
- Subtitle: `text-xs sm:text-sm` responsive
- Padding: `px-2` untuk mobile-friendly
- Bagian "Stunting Checker" punya gradient warna

**Desktop:**
- H1 text: `text-3xl md:text-4xl`
- Full description visible

### 3. **Input Form**
**Mobile:**
- Padding reduced: `px-4 sm:px-6` (dari fixed px-6)
- Font size: `text-sm sm:text-base`
- Label: `text-sm sm:text-base`
- Input font: `text-base` (prevent zoom pada iOS)
- Field description: `text-sm text-muted-foreground`
- Button: Full width (w-full) pada mobile, normal pada desktop

**Desktop:**
- Max-width: `max-w-2xl` (tapi not too wide)
- Spacing: `space-y-6`
- Button: Normal size dengan hover effects

### 4. **Results/Analysis Display**
**Mobile:**
- Card spacing: `space-y-5 sm:space-y-6` (compact di mobile)
- Padding: `px-2 md:px-0`
- Header: `text-xl sm:text-2xl md:text-3xl`
- Charts: 
  - Height reduced: `h-56 sm:h-64` (dari h-64)
  - Margin adjusted: `mt-4 md:mt-6`
  - Font size: `fontSize={12}` untuk axis labels

**Metric Cards:**
- Grid: `grid-cols-2 md:grid-cols-4 gap-2 md:gap-4`
- Padding: `p-2 md:p-3`
- Label: `text-[0.65rem] md:text-xs`
- Value: `text-base md:text-lg`

**Status Badges:**
- Flex direction: `flex-col sm:flex-row` responsive
- Emoji size: `text-3xl sm:text-4xl`
- Gap: `gap-3` untuk breathing room

### 5. **CTA Buttons (Call To Action)**
**Mobile:**
- Full width: `w-full`
- Stacked vertically: `flex-col`
- Gap: `gap-3`
- Padding: `px-6 py-3`
- Padding container: `px-4 sm:px-0` (mobile margins)

**Desktop:**
- Flex row: `flex-row`
- Button: `w-auto`
- Side by side arrangement

---

## 🎨 Typography Responsiveness

| Element | Mobile | Tablet+ | Desktop |
|---------|--------|---------|---------|
| H1 Main | 2xl | 3xl | 4xl |
| H2/Title | text-lg | text-xl | text-2xl |
| Body Text | text-sm | text-base | text-base |
| Small Text | text-xs | text-xs | text-sm |
| Labels | text-xs | text-sm | text-sm |

---

## 📊 Chart Responsiveness

**Mobile Optimization:**
```
- Height: h-56 (224px) instead of h-64 (256px)
- Margin: Less vertical space (mt-4 vs mt-6)
- Margins: Adjusted for small screens (margin={{ left: -20 }})
- Font size: fontSize={12} untuk labels
- Legend: Hidden on very small screens (custom)
```

**Desktop:**
- Full h-64 height
- Larger fonts (default 14px)
- Full margins

---

## 🔄 Animations pada Mobile

Animasi tetap berjalan smooth pada mobile dengan:
- `animate-in-up`, `animate-in-left` untuk entrance
- `animate-stagger-*` untuk sequential animations
- `hover:shadow-lg` (touchscreen: fast response)
- `active:scale-95` untuk button feedback
- Transisi smooth tanpa lag: `transition-all`

---

## 📐 Spacing Strategy (Mobile-First)

```
- Container padding: px-3 sm:px-4 (compact mobile)
- Card padding: px-4 sm:px-6 pb-6
- Vertical spacing: space-y-5 sm:space-y-6
- Gap between items: gap-3 (touch-friendly)
- Button padding: py-3 sm:py-4 (thumb-friendly)
```

---

## ✅ Checklist Responsiveness

- [x] Logo section 3-4 kolom responsive
- [x] Form labels dan inputs readable di mobile
- [x] Input font-size `text-base` untuk prevent iOS zoom
- [x] Charts height optimized (h-56 mobile vs h-64 desktop)
- [x] Metric cards 2-col mobile, 4-col desktop
- [x] Button full-width mobile, auto desktop
- [x] Spacing compact mobile, generous desktop
- [x] Text sizes scale properly (text-xs → text-sm → text-base)
- [x] Padding responsive (px-2 → px-4 → px-6)
- [x] Touch targets 44px+ untuk buttons & inputs
- [x] Animations smooth on mobile devices
- [x] Colors dan contrast AA WCAG compliant

---

## 🖼️ Visual Hierarchy Mobile vs Desktop

### Mobile (Ibu-ibu dengan HP):
1. **Logo Section** (sticky top)
2. **Form Input** - Large, clear fields
3. **Results** - Stacked vertically
4. **Charts** - Full width, smaller height
5. **Recommendations** - Easy to read

### Desktop:
1. **Logo Section** (normal)
2. **Hero Section** - 2-column layout
3. **Form Input** - Centered max-width
4. **Results** - Flowing layout
5. **Charts** - Larger, more detailed
6. **All content** - Better spacing

---

## 🎯 Target User Experience

**Ibu-ibu/Healthcare Workers dengan smartphone:**
- ✅ Bisa baca teks dengan jelas tanpa zoom
- ✅ Bisa klik buttons dengan thumb (44px minimum)
- ✅ Form tidak meminta scroll horizontal
- ✅ Charts visible tanpa landscape rotation
- ✅ Loading states clear (spinner, text)
- ✅ PDF download bisa dari mobile browser

**Desktop Users:**
- ✅ Profesional layout dengan max-width
- ✅ Better spacing dan visual hierarchy
- ✅ Hover effects untuk interaktivitas
- ✅ Larger charts dengan lebih detail
- ✅ Side-by-side components

---

## 🚀 Tips Penggunaan

1. **Di Mobile:** Gunakan portrait mode untuk optimal display
2. **Tablet:** Landscape mode optimal untuk charts
3. **Desktop:** Full experience dengan semua features
4. **PDF Export:** Bisa di-trigger dari mobile (responsive button)

---

## 📱 Testing Checklist

Pastikan testing di device berikut:
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 (390px)
- [ ] Galaxy S21 (360px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px+)
- [ ] Desktop 1920x1080

---

Semua komponen sudah dioptimalkan untuk memberikan pengalaman terbaik bagi ibu-ibu pengguna di smartphone sambil tetap profesional di desktop!
