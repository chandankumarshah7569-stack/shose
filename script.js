/**
 * CHÂN FOOTWEAR ATELIER — CLIENT RUNTIME
 * High-End Luxury Editorial E-Commerce Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     ARCHIVE SILHOUETTE DATA
     ========================================================================== */
  const ARCHIVE_PRODUCTS = [
    {
      id: 10,
      name: "Solar Kinetic Track Spike",
      category: "running",
      categoryDisplay: "Running Series",
      artCode: "ART. CHN-010",
      colorName: "Solar Flame Orange / Silver",
      price: 225.00,
      oldPrice: 260.00,
      image: "assets/images/shoe-10-orange-speedster.webp",
      tag: "New Release",
      isNew: true,
      sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11"],
      description: "High-octane road racing silhouette featuring energy-amplifying sole geometry, metallic TPU overlays, and ultra-breathable open mesh.",
      weight: "192 grams (size US 9)"
    },
    {
      id: 9,
      name: "Aero Spectrum Runner",
      category: "running",
      categoryDisplay: "Running Series",
      artCode: "ART. CHN-009",
      colorName: "Gradient Shadow / Ice Blue",
      price: 195.00,
      oldPrice: 235.00,
      image: "assets/images/shoe-09-gradient-runner.webp",
      tag: "New Release",
      isNew: true,
      sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11", "US 12"],
      description: "Aerodynamic road runner with gradient monofilament mesh upper, reinforced heel stabilizer, and responsive micro-cellular midsole.",
      weight: "178 grams (size US 9)"
    },
    {
      id: 11,
      name: "Atelier Hybrid Knit Derby",
      category: "formal",
      categoryDisplay: "Formal Leather",
      artCode: "ART. CHN-011",
      colorName: "Sand Taupe / Bisque Knit",
      price: 230.00,
      oldPrice: 275.00,
      image: "assets/images/shoe-11-derby-oxford.webp",
      tag: "New Release",
      isNew: true,
      sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11", "US 12"],
      description: "Modern sartorial silhouette pairing fine textured cord knit with Italian vegetable-tanned leather and an athletic lightweight welt sole.",
      weight: "245 grams (size US 9)"
    },
    {
      id: 12,
      name: "Vapour Minimalist Court Low",
      category: "street",
      categoryDisplay: "Lifestyle & Low-Top",
      artCode: "ART. CHN-012",
      colorName: "Crisp White / Slate Cyan",
      price: 165.00,
      oldPrice: 190.00,
      image: "assets/images/shoe-12-court-street.webp",
      tag: "New Release",
      isNew: true,
      sizes: ["US 7.5", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11"],
      description: "Minimalist urban court silhouette constructed from soft nappa leather with archival contrast panels and an all-day comfort cupsole.",
      weight: "210 grams (size US 9)"
    },
    {
      id: 13,
      name: "Cyber Matrix Blade Runner",
      category: "art",
      categoryDisplay: "Limited Series",
      artCode: "ART. CHN-013",
      colorName: "Cyber Yellow / Ink Splatter",
      price: 270.00,
      oldPrice: 310.00,
      image: "assets/images/shoe-13-cyber-blade.webp",
      tag: "New Release",
      isNew: true,
      sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11"],
      description: "Architectural sculpture meets running performance. Featuring hollow structural spring blades, high-density impact absorption, and hand-applied splatter graphics.",
      weight: "235 grams (size US 9)"
    },
    {
      id: 14,
      name: "Heritage Mod Colorblock Runner",
      category: "street",
      categoryDisplay: "Lifestyle & Low-Top",
      artCode: "ART. CHN-014",
      colorName: "Olive Suede / Cherry Red",
      price: 215.00,
      oldPrice: 250.00,
      image: "assets/images/shoe-14-heritage-runner.webp",
      tag: "New Release",
      isNew: true,
      sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11"],
      description: "Luxurious 70s-inspired runner crafted with Italian calf suede, high-tenacity canvas inserts, and a dual-compound ergonomic platform.",
      weight: "220 grams (size US 9)"
    },
    {
      id: 15,
      name: "Riviera Nautical Deck Loafer",
      category: "formal",
      categoryDisplay: "Formal Leather",
      artCode: "ART. CHN-015",
      colorName: "Deep Navy / Sail White",
      price: 190.00,
      oldPrice: 225.00,
      image: "assets/images/shoe-15-nautical-loafer.webp",
      tag: "New Release",
      isNew: true,
      sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11", "US 12"],
      description: "Timeless maritime moccasin crafted with water-resistant pull-up leather, 360-degree lacing system, and siped non-marking rubber outsoles.",
      weight: "240 grams (size US 9)"
    },
    {
      id: 16,
      name: "Milano Leather Driving Moccasin",
      category: "formal",
      categoryDisplay: "Formal Leather",
      artCode: "ART. CHN-016",
      colorName: "Obsidian Black / Glove Leather",
      price: 205.00,
      oldPrice: 240.00,
      image: "assets/images/shoe-16-black-moccasin.webp",
      tag: "New Release",
      isNew: true,
      sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11", "US 12"],
      description: "Buttery-soft full-grain glove leather driving loafer engineered for supreme pedal dexterity and effortless slip-on lounge luxury.",
      weight: "225 grams (size US 9)"
    },
    {
      id: 1,
      name: "Phantom Running Shoe",
      category: "running",
      categoryDisplay: "Running Series",
      artCode: "ART. CHN-001",
      colorName: "Stealth Grey / Silver",
      price: 185.00,
      oldPrice: 220.00,
      image: "assets/images/shoe-01-grey.png",
      tag: "Popular",
      sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11", "US 12"],
      description: "Lightweight neutral running shoe engineered with resilient dual-density foam and breathable monofilament mesh upper for daily road mileage.",
      weight: "182 grams (size US 9)"
    },
    {
      id: 2,
      name: "Apex Track Runner",
      category: "running",
      categoryDisplay: "Running Series",
      artCode: "ART. CHN-002",
      colorName: "Crimson Red / Black",
      price: 210.00,
      oldPrice: 250.00,
      image: "assets/images/shoe-02-red.png",
      tag: "New Arrival",
      sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11", "US 12"],
      description: "Competition road runner featuring a full-length 3K carbon composite plate for forward propulsion and explosive toe-off energy return.",
      weight: "188 grams (size US 9)"
    },
    {
      id: 3,
      name: "Kinetic Everyday Sneaker",
      category: "street",
      categoryDisplay: "Lifestyle & Low-Top",
      artCode: "ART. CHN-003",
      colorName: "Polar Ice Blue / Off-White",
      price: 160.00,
      oldPrice: 180.00,
      image: "assets/images/shoe-03-blue.png",
      tag: "Core Atelier",
      sizes: ["US 7.5", "US 8", "US 8.5", "US 9", "US 10", "US 11"],
      description: "Low-profile casual sneaker designed for all-day walking comfort on urban pavements. Built with cushioned insoles and durable vulcanized soles.",
      weight: "196 grams (size US 9)"
    },
    {
      id: 4,
      name: "Volt Night Trainer",
      category: "running",
      categoryDisplay: "Running Series",
      artCode: "ART. CHN-004",
      colorName: "Acid Volt / Green",
      price: 195.00,
      oldPrice: 230.00,
      image: "assets/images/shoe-04-green.png",
      tag: "High Visibility",
      sizes: ["US 8.5", "US 9", "US 9.5", "US 10", "US 11"],
      description: "Engineered for evening road workouts with integrated 3M reflective threading and a high-traction cryogenic rubber outsole.",
      weight: "189 grams (size US 9)"
    },
    {
      id: 5,
      name: "Classic Oxford Dress Shoe",
      category: "formal",
      categoryDisplay: "Formal Leather",
      artCode: "ART. CHN-005",
      colorName: "Espresso Brown Calfskin",
      price: 240.00,
      oldPrice: 280.00,
      image: "assets/images/shoe-05-black-formal.png",
      tag: "Handcrafted",
      sizes: ["US 8", "US 8.5", "US 9", "US 10", "US 11", "US 12"],
      description: "Full-grain calfskin leather dress shoe with hand-stitched detailing, an athletic cushioned insole, and stacked wooden heel with rubber traction.",
      weight: "260 grams (size US 9)"
    },
    {
      id: 6,
      name: "Monochrome Street Low",
      category: "street",
      categoryDisplay: "Lifestyle & Low-Top",
      artCode: "ART. CHN-006",
      colorName: "Clean White / Black",
      price: 150.00,
      oldPrice: 175.00,
      image: "assets/images/shoe-06-white-black.png",
      tag: "Essential",
      sizes: ["US 7", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11"],
      description: "Minimalist leather sneaker with clean architectural lines. Versatile styling that transitions effortlessly from studio to city streets.",
      weight: "215 grams (size US 9)"
    },
    {
      id: 7,
      name: "Canvas Edition Sneaker",
      category: "art",
      categoryDisplay: "Limited Series",
      artCode: "ART. CHN-007",
      colorName: "Olive Green / Natural",
      price: 220.00,
      oldPrice: 260.00,
      image: "assets/images/shoe-07-art.png",
      tag: "Limited 1/500",
      sizes: ["US 8", "US 9", "US 10", "US 11"],
      description: "Heavyweight 14oz organic cotton canvas upper paired with recycled rubber cupsole. Hand-finished and numbered in a limited atelier run.",
      weight: "228 grams (size US 9)"
    },
    {
      id: 8,
      name: "Junior Sport Runner",
      category: "kids",
      categoryDisplay: "Junior Series",
      artCode: "ART. CHN-008",
      colorName: "Coral Pink / Gold",
      price: 95.00,
      oldPrice: 110.00,
      image: "assets/images/shoe-08-kids.png",
      tag: "Junior Edition",
      sizes: ["US 3Y", "US 4Y", "US 5Y", "US 6Y", "US 7Y"],
      description: "Durable trainer designed for youth sports and everyday active movement. Features flexible shock absorption and scuff-resistant toe bumper.",
      weight: "140 grams"
    }
  ];

  /* ==========================================================================
     HERO COLORWAY PRESETS
     ========================================================================== */
  const HERO_SWATCHES = [
    {
      id: 10,
      label: "01 SOLAR FLAME",
      colorHex: "#f97316",
      name: "Solar Kinetic Track Spike",
      serial: "REF: ART-SOLAR-010",
      price: "$225.00",
      image: "assets/images/shoe-10-orange-speedster.webp",
      weight: "192 grams (size US 9)",
      desc: "High-octane road racing silhouette featuring energy-amplifying sole geometry, metallic TPU overlays, and ultra-breathable open mesh."
    },
    {
      id: 9,
      label: "02 SHADOW FADE",
      colorHex: "#475569",
      name: "Aero Spectrum Runner",
      serial: "REF: ART-AERO-009",
      price: "$195.00",
      image: "assets/images/shoe-09-gradient-runner.webp",
      weight: "178 grams (size US 9)",
      desc: "Aerodynamic road runner with gradient monofilament mesh upper, reinforced heel stabilizer, and responsive micro-cellular midsole."
    },
    {
      id: 2,
      label: "03 CRIMSON RED",
      colorHex: "#9b1b22",
      name: "Apex Track Runner",
      serial: "REF: ART-APEX-002",
      price: "$210.00",
      image: "assets/images/shoe-02-red.png",
      weight: "188 grams (size US 9)",
      desc: "High-velocity road racer engineered with a full-length carbon propulsion blade, dual-density responsive foam, and breathable engineered matrix mesh."
    },
    {
      id: 1,
      label: "04 STEALTH GREY",
      colorHex: "#52525e",
      name: "Phantom Running Shoe",
      serial: "REF: ART-PHAN-001",
      price: "$185.00",
      image: "assets/images/shoe-01-grey.png",
      weight: "182 grams (size US 9)",
      desc: "Lightweight neutral running shoe engineered with resilient dual-density foam and breathable monofilament mesh upper for daily road mileage."
    },
    {
      id: 3,
      label: "05 POLAR BLUE",
      colorHex: "#3b7ec4",
      name: "Kinetic Everyday Sneaker",
      serial: "REF: ART-KINE-003",
      price: "$160.00",
      image: "assets/images/shoe-03-blue.png",
      weight: "196 grams (size US 9)",
      desc: "Low-profile casual sneaker designed for all-day walking comfort on urban pavements. Built with cushioned insoles and durable vulcanized soles."
    },
    {
      id: 4,
      label: "06 VOLT GREEN",
      colorHex: "#1f8b3c",
      name: "Volt Night Trainer",
      serial: "REF: ART-VOLT-004",
      price: "$195.00",
      image: "assets/images/shoe-04-green.png",
      weight: "189 grams (size US 9)",
      desc: "Engineered for evening road workouts with integrated 3M reflective threading and a high-traction cryogenic rubber outsole."
    }
  ];

  /* ==========================================================================
     STATE
     ========================================================================== */
  const state = {
    cart: JSON.parse(localStorage.getItem('chan_atelier_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('chan_atelier_wishlist') || '[]'),
    activeFilter: 'all',
    searchQuery: '',
    sortMode: 'featured',
    selectedSizes: {},
    activeHeroIndex: 0,
    heroSelectedSize: 'US 9',
    discountPercent: 0,
    detailsProductId: 10,
    detailsSelectedSize: 'US 9',
    detailsActiveColor: '',
    detailsActiveImage: '',
    userReviews: JSON.parse(localStorage.getItem('chan_user_reviews') || '{}'),
    viewMode: 'grid'
  };

  /* ==========================================================================
     DOM ELEMENTS
     ========================================================================== */
  const el = {
    siteHeader: document.getElementById('siteHeader'),
    headerSearchInput: document.getElementById('headerSearchInput'),
    headerSearchBtn: document.getElementById('headerSearchBtn'),
    wishlistTriggerBtn: document.getElementById('wishlistTriggerBtn'),
    cartTriggerBtn: document.getElementById('cartTriggerBtn'),
    wishlistCount: document.getElementById('wishlistCount'),
    cartCount: document.getElementById('cartCount'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileNavDrawer: document.getElementById('mobileNavDrawer'),

    // Hero
    heroTitle: document.getElementById('heroTitle'),
    heroDesc: document.getElementById('heroDesc'),
    heroPrice: document.getElementById('heroPrice'),
    heroColorLabel: document.getElementById('heroColorLabel'),
    heroColorwayContainer: document.getElementById('heroColorwayContainer'),
    heroSizeGrid: document.getElementById('heroSizeGrid'),
    heroWeight: document.getElementById('heroWeight'),
    heroSerial: document.getElementById('heroSerial'),
    heroShoeImg: document.getElementById('heroShoeImg'),
    heroThumbStrip: document.getElementById('heroThumbStrip'),
    heroAddToCartBtn: document.getElementById('heroAddToCartBtn'),
    heroWishlistBtn: document.getElementById('heroWishlistBtn'),

    // Catalog
    catalogCount: document.getElementById('catalogCount'),
    categoryTabs: document.getElementById('categoryTabs'),
    catalogSortSelect: document.getElementById('catalogSortSelect'),
    viewGridBtn: document.getElementById('viewGridBtn'),
    viewLookbookBtn: document.getElementById('viewLookbookBtn'),
    productsGrid: document.getElementById('productsGrid'),
    emptyResults: document.getElementById('emptyResults'),
    resetCatalogBtn: document.getElementById('resetCatalogBtn'),

    // Calculator
    calcLengthInput: document.getElementById('calcLengthInput'),
    recUS: document.getElementById('recUS'),
    recEU: document.getElementById('recEU'),
    recUK: document.getElementById('recUK'),
    recNote: document.getElementById('recNote'),

    // Cart
    cartDrawer: document.getElementById('cartDrawer'),
    cartOverlay: document.getElementById('cartOverlay'),
    closeCartBtn: document.getElementById('closeCartBtn'),
    cartDrawerCount: document.getElementById('cartDrawerCount'),
    shippingNoticeText: document.getElementById('shippingNoticeText'),
    shippingBarFill: document.getElementById('shippingBarFill'),
    cartItemsList: document.getElementById('cartItemsList'),
    cartEmptyState: document.getElementById('cartEmptyState'),
    cartDrawerFooter: document.getElementById('cartDrawerFooter'),
    promoInput: document.getElementById('promoInput'),
    applyPromoBtn: document.getElementById('applyPromoBtn'),
    promoFeedback: document.getElementById('promoFeedback'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartDiscountRow: document.getElementById('cartDiscountRow'),
    cartDiscount: document.getElementById('cartDiscount'),
    cartShipping: document.getElementById('cartShipping'),
    cartTotal: document.getElementById('cartTotal'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    cartShopNowBtn: document.getElementById('cartShopNowBtn'),

    // Wishlist
    wishlistDrawer: document.getElementById('wishlistDrawer'),
    wishlistOverlay: document.getElementById('wishlistOverlay'),
    closeWishlistBtn: document.getElementById('closeWishlistBtn'),
    wishlistDrawerCount: document.getElementById('wishlistDrawerCount'),
    wishlistItemsList: document.getElementById('wishlistItemsList'),
    wishlistEmptyState: document.getElementById('wishlistEmptyState'),
    wishlistShopNowBtn: document.getElementById('wishlistShopNowBtn'),

    // Product Details Modal (Flipkart / Editorial Spec & Review Experience)
    productDetailsModal: document.getElementById('productDetailsModal'),
    pdBackBtn: document.getElementById('pdBackBtn'),
    closeProductDetailsBtn: document.getElementById('closeProductDetailsBtn'),
    pdWishlistBtn: document.getElementById('pdWishlistBtn'),
    pdShareBtn: document.getElementById('pdShareBtn'),
    pdBreadcrumbs: document.getElementById('pdBreadcrumbs'),
    pdCrumbCat: document.getElementById('pdCrumbCat'),
    pdCrumbTitle: document.getElementById('pdCrumbTitle'),
    pdThumbList: document.getElementById('pdThumbList'),
    pdFloatingBadge: document.getElementById('pdFloatingBadge'),
    pdMainImg: document.getElementById('pdMainImg'),
    pdArtCode: document.getElementById('pdArtCode'),
    pdTitle: document.getElementById('pdTitle'),
    pdRatingStrip: document.getElementById('pdRatingStrip'),
    pdRatingVal: document.getElementById('pdRatingVal'),
    pdRatingText: document.getElementById('pdRatingText'),
    pdDealTag: document.getElementById('pdDealTag'),
    pdDiscountPercent: document.getElementById('pdDiscountPercent'),
    pdOldPrice: document.getElementById('pdOldPrice'),
    pdPrice: document.getElementById('pdPrice'),
    pdSelectedColorName: document.getElementById('pdSelectedColorName'),
    pdColorSwatches: document.getElementById('pdColorSwatches'),
    pdSizeGuideBtn: document.getElementById('pdSizeGuideBtn'),
    pdSizeGrid: document.getElementById('pdSizeGrid'),
    pdZipInput: document.getElementById('pdZipInput'),
    pdCheckZipBtn: document.getElementById('pdCheckZipBtn'),
    pdDeliveryResult: document.getElementById('pdDeliveryResult'),
    pdAddToCartBtn: document.getElementById('pdAddToCartBtn'),
    pdBuyNowBtn: document.getElementById('pdBuyNowBtn'),
    pdBuyNowText: document.getElementById('pdBuyNowText'),
    pdNarrative: document.getElementById('pdNarrative'),
    pdSpecsTable: document.getElementById('pdSpecsTable'),
    pdReviewsSection: document.getElementById('pdReviewsSection'),
    pdScoreNum: document.getElementById('pdScoreNum'),
    pdScoreStars: document.getElementById('pdScoreStars'),
    pdScoreSub: document.getElementById('pdScoreSub'),
    pdStarBars: document.getElementById('pdStarBars'),
    pdWriteReviewBtn: document.getElementById('pdWriteReviewBtn'),
    pdWriteFormBox: document.getElementById('pdWriteFormBox'),
    pdNewReviewForm: document.getElementById('pdNewReviewForm'),
    cancelReviewBtn: document.getElementById('cancelReviewBtn'),
    pdReviewsList: document.getElementById('pdReviewsList'),
    revAuthor: document.getElementById('revAuthor'),
    revStars: document.getElementById('revStars'),
    revTitle: document.getElementById('revTitle'),
    revComment: document.getElementById('revComment'),

    // Confirmation
    checkoutModal: document.getElementById('checkoutModal'),
    orderIdDisplay: document.getElementById('orderIdDisplay'),
    orderTotalPaid: document.getElementById('orderTotalPaid'),
    closeConfirmationBtn: document.getElementById('closeConfirmationBtn'),

    // Policies
    privacyModal: document.getElementById('privacyModal'),
    termsModal: document.getElementById('termsModal'),
    openPrivacyBtn: document.getElementById('openPrivacyBtn'),
    openTermsBtn: document.getElementById('openTermsBtn'),
    closePrivacyBtn: document.getElementById('closePrivacyBtn'),
    closeTermsBtn: document.getElementById('closeTermsBtn'),
    acceptPrivacyBtn: document.getElementById('acceptPrivacyBtn'),
    acceptTermsBtn: document.getElementById('acceptTermsBtn'),

    // Newsletter & Toasts
    newsletterForm: document.getElementById('newsletterForm'),
    newsletterEmail: document.getElementById('newsletterEmail'),
    toastShelf: document.getElementById('toastShelf')
  };

  /* ==========================================================================
     INIT
     ========================================================================== */
  function init() {
    renderHeroSwatches();
    updateCategoryTabCounts();
    renderArchiveCatalog();
    updateBadges();
    initCart();
    initWishlist();
    initCalculator();
    setupListeners();
  }

  function updateCategoryTabCounts() {
    if (!el.categoryTabs) return;
    const counts = {
      all: ARCHIVE_PRODUCTS.length,
      new: ARCHIVE_PRODUCTS.filter(p => p.isNew).length,
      running: ARCHIVE_PRODUCTS.filter(p => p.category === 'running').length,
      street: ARCHIVE_PRODUCTS.filter(p => p.category === 'street').length,
      formal: ARCHIVE_PRODUCTS.filter(p => p.category === 'formal').length,
      art: ARCHIVE_PRODUCTS.filter(p => p.category === 'art').length,
      kids: ARCHIVE_PRODUCTS.filter(p => p.category === 'kids').length
    };

    el.categoryTabs.querySelectorAll('.filter-pill').forEach(pill => {
      const filter = pill.dataset.filter;
      if (filter && counts[filter] !== undefined) {
        const label = filter === 'all' ? 'All' :
                      filter === 'new' ? '★ New Releases' :
                      filter === 'running' ? 'Running' :
                      filter === 'street' ? 'Lifestyle' :
                      filter === 'formal' ? 'Formal' :
                      filter === 'art' ? 'Limited Series' :
                      filter === 'kids' ? 'Junior' : filter;
        pill.textContent = `${label} (${counts[filter]})`;
      }
    });
  }

  /* ==========================================================================
     HERO SECTION
     ========================================================================== */
  function renderHeroSwatches() {
    el.heroColorwayContainer.innerHTML = '';
    HERO_SWATCHES.forEach((sw, idx) => {
      const btn = document.createElement('button');
      btn.className = `colorway-pill ${idx === state.activeHeroIndex ? 'active' : ''}`;
      btn.innerHTML = `<span class="swatch-pip" style="background-color: ${sw.colorHex}"></span> ${sw.label}`;
      btn.addEventListener('click', () => switchHero(idx));
      el.heroColorwayContainer.appendChild(btn);
    });

    renderHeroThumbnails();
  }

  function renderHeroThumbnails() {
    if (!el.heroThumbStrip) return;
    el.heroThumbStrip.innerHTML = HERO_SWATCHES.map((sw, idx) => `
      <div class="hero-thumb-card ${idx === state.activeHeroIndex ? 'active' : ''}" data-hero-index="${idx}">
        <img src="${sw.image}" alt="${sw.name}" class="hero-thumb-img">
        <span class="hero-thumb-label">${sw.label.replace(/^\d+\s*/, '')}</span>
      </div>
    `).join('');
  }

  function switchHero(idx) {
    state.activeHeroIndex = idx;
    const item = HERO_SWATCHES[idx];

    el.heroColorwayContainer.querySelectorAll('.colorway-pill').forEach((b, i) => {
      b.classList.toggle('active', i === idx);
    });

    if (el.heroThumbStrip) {
      el.heroThumbStrip.querySelectorAll('.hero-thumb-card').forEach((c, i) => {
        c.classList.toggle('active', i === idx);
      });
    }

    el.heroShoeImg.style.opacity = '0.2';
    el.heroShoeImg.style.transform = 'scale(0.97)';
    setTimeout(() => {
      el.heroShoeImg.src = item.image;
      el.heroShoeImg.alt = `${item.name} - ${item.label}`;
      el.heroTitle.textContent = item.name;
      el.heroColorLabel.textContent = item.label;
      el.heroPrice.textContent = item.price;
      el.heroDesc.textContent = item.desc;
      el.heroWeight.textContent = item.weight;
      el.heroSerial.textContent = item.serial;
      el.heroShoeImg.style.opacity = '1';
      el.heroShoeImg.style.transform = 'scale(1)';
    }, 150);
  }

  if (el.heroThumbStrip) {
    el.heroThumbStrip.addEventListener('click', (e) => {
      const card = e.target.closest('.hero-thumb-card');
      if (!card) return;
      const idx = parseInt(card.dataset.heroIndex, 10);
      switchHero(idx);
    });
  }

  el.heroSizeGrid.addEventListener('click', (e) => {
    const cell = e.target.closest('.size-cell');
    if (!cell) return;
    el.heroSizeGrid.querySelectorAll('.size-cell').forEach(c => c.classList.remove('active'));
    cell.classList.add('active');
    state.heroSelectedSize = cell.dataset.size;
  });

  el.heroAddToCartBtn.addEventListener('click', () => {
    const sw = HERO_SWATCHES[state.activeHeroIndex];
    const product = ARCHIVE_PRODUCTS.find(p => p.id === sw.id) || ARCHIVE_PRODUCTS[1];
    addToCart({
      id: product.id,
      name: `${product.name} (${sw.label})`,
      price: product.price,
      size: state.heroSelectedSize,
      image: sw.image,
      color: sw.label
    });
  });

  el.heroWishlistBtn.addEventListener('click', () => {
    const sw = HERO_SWATCHES[state.activeHeroIndex];
    toggleWishlist(sw.id);
  });

  /* ==========================================================================
     CATALOG RENDERING
     ========================================================================== */
  function renderArchiveCatalog() {
    let list = [...ARCHIVE_PRODUCTS];

    if (state.activeFilter !== 'all') {
      if (state.activeFilter === 'new') {
        list = list.filter(p => p.isNew);
      } else {
        list = list.filter(p => p.category === state.activeFilter);
      }
    }

    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.colorName.toLowerCase().includes(q) ||
        p.categoryDisplay.toLowerCase().includes(q) ||
        p.artCode.toLowerCase().includes(q)
      );
    }

    if (state.sortMode === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (state.sortMode === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (state.sortMode === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    el.catalogCount.textContent = `${list.length} SILHOUETTE${list.length === 1 ? '' : 'S'}`;

    if (list.length === 0) {
      el.productsGrid.innerHTML = '';
      el.emptyResults.style.display = 'block';
    } else {
      el.emptyResults.style.display = 'none';
      el.productsGrid.innerHTML = list.map(p => {
        const isSaved = state.wishlist.includes(p.id);
        const curSize = state.selectedSizes[p.id] || p.sizes[2] || p.sizes[0];

        return `
          <article class="archive-card ${p.isNew ? 'is-new-release' : ''}" data-product-id="${p.id}">
            <div class="card-frame">
              <span class="card-tag-box ${p.isNew ? 'new-badge' : ''}">${p.tag}</span>
              
              <button class="card-save-btn ${isSaved ? 'active' : ''}" data-save-id="${p.id}" aria-label="Save to Wishlist" title="Save to Wishlist">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>

              <img src="${p.image}" alt="${p.name}" class="card-photo">

              <!-- Quick Size Selector Overlay -->
              <div class="card-quick-strip" data-id="${p.id}">
                <span class="quick-sizes-title">QUICK SIZE:</span>
                <div class="quick-size-cells">
                  ${p.sizes.slice(0, 5).map(sz => `
                    <button class="mini-size-btn ${sz === curSize ? 'active' : ''}" data-size="${sz}">${sz.replace('US ', '')}</button>
                  `).join('')}
                </div>
              </div>
            </div>

            <div class="card-caption">
              <div class="card-meta-line">
                <span>${p.categoryDisplay}</span>
                <span>${p.artCode}</span>
              </div>

              <h3 class="card-silhouette-title">${p.name}</h3>
              <p class="card-colorway-sub">${p.colorName}</p>
              
              <p class="card-narrative-excerpt">${p.description}</p>

              <div class="card-action-bar">
                <div class="price-unit">
                  <span class="price-current">$${p.price.toFixed(2)}</span>
                  <span class="price-strike">$${p.oldPrice.toFixed(2)}</span>
                </div>
                <div class="card-cta-group">
                  <button class="card-view-btn" data-modal-id="${p.id}">VIEW</button>
                  <button class="card-bag-btn" data-add-id="${p.id}">ADD</button>
                </div>
              </div>
            </div>
          </article>
        `;
      }).join('');
    }
  }

  // Delegated Card Actions
  el.productsGrid.addEventListener('click', (e) => {
    // Mini size select
    const sizeBtn = e.target.closest('.mini-size-btn');
    if (sizeBtn) {
      e.stopPropagation();
      const container = sizeBtn.closest('.card-quick-strip');
      const productId = container.dataset.id;
      container.querySelectorAll('.mini-size-btn').forEach(b => b.classList.remove('active'));
      sizeBtn.classList.add('active');
      state.selectedSizes[productId] = sizeBtn.dataset.size;
      return;
    }

    // Wishlist save
    const saveBtn = e.target.closest('.card-save-btn');
    if (saveBtn) {
      e.stopPropagation();
      const id = parseInt(saveBtn.dataset.saveId, 10);
      toggleWishlist(id);
      return;
    }

    // Direct add
    const addBtn = e.target.closest('.card-bag-btn');
    if (addBtn) {
      e.stopPropagation();
      const id = parseInt(addBtn.dataset.addId, 10);
      const product = ARCHIVE_PRODUCTS.find(p => p.id === id);
      if (product) {
        const size = state.selectedSizes[id] || product.sizes[2] || product.sizes[0];
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          size: size,
          image: product.image,
          color: product.colorName
        });
      }
      return;
    }

    // Explicit VIEW button
    const viewBtn = e.target.closest('.card-view-btn');
    if (viewBtn) {
      e.stopPropagation();
      const id = parseInt(viewBtn.dataset.modalId, 10);
      openProductDetails(id);
      return;
    }

    // Clicking anywhere on the shoe card (card frame, image, title, excerpt)
    const card = e.target.closest('.archive-card');
    if (card) {
      const id = parseInt(card.dataset.productId, 10);
      openProductDetails(id);
      return;
    }
  });

  /* ==========================================================================
     SHOPPING BAG (CART)
     ========================================================================== */
  function addToCart(item) {
    const idx = state.cart.findIndex(i => i.id === item.id && i.size === item.size);
    if (idx > -1) {
      state.cart[idx].quantity += 1;
    } else {
      state.cart.push({ ...item, quantity: 1 });
    }
    persistCart();
    renderCart();
    openDrawer(el.cartDrawer, el.cartOverlay);
    showToast(`Added ${item.name} (${item.size}) to bag.`);
  }

  function adjustQty(idx, delta) {
    if (!state.cart[idx]) return;
    state.cart[idx].quantity += delta;
    if (state.cart[idx].quantity <= 0) {
      const removed = state.cart.splice(idx, 1)[0];
      showToast(`Removed ${removed.name} from bag.`);
    }
    persistCart();
    renderCart();
  }

  function removeCartItem(idx) {
    if (!state.cart[idx]) return;
    const removed = state.cart.splice(idx, 1)[0];
    persistCart();
    renderCart();
    showToast(`Removed ${removed.name} from bag.`);
  }

  function persistCart() {
    localStorage.setItem('chan_atelier_cart', JSON.stringify(state.cart));
    updateBadges();
  }

  function updateBadges() {
    const count = state.cart.reduce((s, i) => s + i.quantity, 0);
    el.cartCount.textContent = count;
    el.cartDrawerCount.textContent = count;

    const wishCount = state.wishlist.length;
    el.wishlistCount.textContent = wishCount;
    el.wishlistDrawerCount.textContent = wishCount;
  }

  function renderCart() {
    if (state.cart.length === 0) {
      el.cartItemsList.innerHTML = '';
      el.cartEmptyState.classList.add('visible');
      el.cartDrawerFooter.style.display = 'none';
      updateShippingMeter(0);
      return;
    }

    el.cartEmptyState.classList.remove('visible');
    el.cartDrawerFooter.style.display = 'flex';

    el.cartItemsList.innerHTML = state.cart.map((item, index) => `
      <div class="cart-row">
        <img src="${item.image}" alt="${item.name}" class="cart-img-thumb">
        <div class="cart-info">
          <div class="cart-info-top">
            <h4 class="cart-item-title">${item.name}</h4>
            <button class="cart-item-remove-btn" data-cart-del="${index}" title="Remove item">×</button>
          </div>
          <div class="cart-item-meta">Size: ${item.size} / ${item.color}</div>
          <div class="cart-info-bottom">
            <div class="qty-stepper">
              <button class="qty-step-btn" data-cart-step="${index}" data-delta="-1">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-step-btn" data-cart-step="${index}" data-delta="1">+</button>
            </div>
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
      </div>
    `).join('');

    const subtotal = state.cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    const discount = subtotal * (state.discountPercent / 100);
    const shipping = subtotal >= 150 ? 0 : (subtotal > 0 ? 15 : 0);
    const total = Math.max(0, subtotal - discount + shipping);

    el.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;

    if (state.discountPercent > 0) {
      el.cartDiscountRow.style.display = 'flex';
      el.cartDiscount.textContent = `-$${discount.toFixed(2)}`;
    } else {
      el.cartDiscountRow.style.display = 'none';
    }

    el.cartShipping.textContent = subtotal >= 150 ? "FREE" : `$${shipping.toFixed(2)}`;
    el.cartTotal.textContent = `$${total.toFixed(2)}`;

    updateShippingMeter(subtotal);
  }

  function updateShippingMeter(subtotal) {
    const goal = 150;
    if (subtotal >= goal) {
      el.shippingBarFill.style.width = '100%';
      el.shippingNoticeText.textContent = "Your order qualifies for complimentary express courier dispatch.";
    } else {
      const diff = (goal - subtotal).toFixed(2);
      const pct = Math.min(100, (subtotal / goal) * 100);
      el.shippingBarFill.style.width = `${pct}%`;
      el.shippingNoticeText.textContent = `Add $${diff} more for complimentary express delivery.`;
    }
  }

  function initCart() {
    renderCart();

    el.cartTriggerBtn.addEventListener('click', () => openDrawer(el.cartDrawer, el.cartOverlay));
    el.closeCartBtn.addEventListener('click', () => closeDrawer(el.cartDrawer, el.cartOverlay));
    el.cartOverlay.addEventListener('click', () => closeDrawer(el.cartDrawer, el.cartOverlay));

    el.cartShopNowBtn.addEventListener('click', () => {
      closeDrawer(el.cartDrawer, el.cartOverlay);
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });

    el.cartItemsList.addEventListener('click', (e) => {
      const stepBtn = e.target.closest('[data-cart-step]');
      if (stepBtn) {
        const idx = parseInt(stepBtn.dataset.cartStep);
        const delta = parseInt(stepBtn.dataset.delta);
        adjustQty(idx, delta);
        return;
      }

      const delBtn = e.target.closest('[data-cart-del]');
      if (delBtn) {
        const idx = parseInt(delBtn.dataset.cartDel);
        removeCartItem(idx);
        return;
      }
    });

    // Discount Code Engine
    el.applyPromoBtn.addEventListener('click', executePromo);
    el.promoInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        executePromo();
      }
    });

    // Checkout Proceed
    el.checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) return;
      const totalStr = el.cartTotal.textContent;
      const ref = 'CHN-' + Math.floor(10000 + Math.random() * 90000);
      el.orderIdDisplay.textContent = `#${ref}`;
      el.orderTotalPaid.textContent = totalStr;

      closeDrawer(el.cartDrawer, el.cartOverlay);
      openModal(el.checkoutModal);

      state.cart = [];
      persistCart();
      renderCart();
    });
  }

  function executePromo() {
    const code = el.promoInput.value.trim().toUpperCase();
    if (!code) return;

    if (code === 'WELCOME10' || code === 'ATELIER10') {
      state.discountPercent = 10;
      el.promoFeedback.className = 'promo-feedback-note success';
      el.promoFeedback.textContent = '10% atelier discount applied.';
      renderCart();
      showToast('10% discount applied to your bag.');
    } else {
      el.promoFeedback.className = 'promo-feedback-note error';
      el.promoFeedback.textContent = 'Invalid code. Use WELCOME10 for 10% off.';
    }
  }

  /* ==========================================================================
     WISHLIST
     ========================================================================== */
  function toggleWishlist(id) {
    const idx = state.wishlist.indexOf(id);
    const product = ARCHIVE_PRODUCTS.find(p => p.id === id);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      showToast(`Removed ${product ? product.name : 'item'} from wishlist.`);
    } else {
      state.wishlist.push(id);
      showToast(`Saved ${product ? product.name : 'item'} to wishlist.`);
    }
    persistWishlist();
    renderArchiveCatalog();
    renderWishlist();
  }

  function persistWishlist() {
    localStorage.setItem('chan_atelier_wishlist', JSON.stringify(state.wishlist));
    updateBadges();
  }

  function renderWishlist() {
    if (state.wishlist.length === 0) {
      el.wishlistItemsList.innerHTML = '';
      el.wishlistEmptyState.classList.add('visible');
      return;
    }

    el.wishlistEmptyState.classList.remove('visible');
    const items = ARCHIVE_PRODUCTS.filter(p => state.wishlist.includes(p.id));

    el.wishlistItemsList.innerHTML = items.map(p => `
      <div class="cart-row">
        <img src="${p.image}" alt="${p.name}" class="cart-img-thumb">
        <div class="cart-info">
          <div class="cart-info-top">
            <h4 class="cart-item-title">${p.name}</h4>
            <button class="cart-item-remove-btn" data-wish-del="${p.id}" title="Remove item">×</button>
          </div>
          <div class="cart-item-meta">${p.categoryDisplay} / $${p.price.toFixed(2)}</div>
          <div style="margin-top: 8px;">
            <button class="btn btn-black" style="padding: 6px 14px; font-size: 0.74rem;" data-wish-transfer="${p.id}">
              MOVE TO BAG
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function initWishlist() {
    renderWishlist();

    el.wishlistTriggerBtn.addEventListener('click', () => openDrawer(el.wishlistDrawer, el.wishlistOverlay));
    el.closeWishlistBtn.addEventListener('click', () => closeDrawer(el.wishlistDrawer, el.wishlistOverlay));
    el.wishlistOverlay.addEventListener('click', () => closeDrawer(el.wishlistDrawer, el.wishlistOverlay));

    el.wishlistShopNowBtn.addEventListener('click', () => {
      closeDrawer(el.wishlistDrawer, el.wishlistOverlay);
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });

    el.wishlistItemsList.addEventListener('click', (e) => {
      const delBtn = e.target.closest('[data-wish-del]');
      if (delBtn) {
        const id = parseInt(delBtn.dataset.wishDel);
        toggleWishlist(id);
        return;
      }

      const transferBtn = e.target.closest('[data-wish-transfer]');
      if (transferBtn) {
        const id = parseInt(transferBtn.dataset.wishTransfer);
        const product = ARCHIVE_PRODUCTS.find(p => p.id === id);
        if (product) {
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            size: product.sizes[2] || product.sizes[0],
            image: product.image,
            color: product.colorName
          });
          toggleWishlist(id);
        }
        return;
      }
    });
  }

  /* ==========================================================================
     COMPREHENSIVE PRODUCT DETAILS VIEW & REVIEWS ENGINE (FLIPKART REFERENCE)
     ========================================================================== */
  const DEFAULT_PRODUCT_REVIEWS = [
    {
      id: 'rev_1',
      author: 'Vikram Sengupta',
      rating: 5,
      date: 'Verified Purchaser • 3 days ago',
      title: 'Incredible propulsion & supreme locked-in arch comfort',
      comment: 'Logged over 110km on road circuits. The responsive energy return in the forefoot feels effortless. Materials, breathable matrix knit, and craftsmanship far exceed expectation.',
      helpful: 48,
      voted: false
    },
    {
      id: 'rev_2',
      author: 'Dr. Priya Nambiar',
      rating: 5,
      date: 'Verified Purchaser • 1 week ago',
      title: 'Stunning craftsmanship and 100% true-to-size fit',
      comment: 'The silhouette looks even sharper in reality than in photos. The anatomical cupsole gives zero heel slippage, and the finish is impeccable. Excellent packaging with atelier shoe bags.',
      helpful: 31,
      voted: false
    },
    {
      id: 'rev_3',
      author: 'Marcus Vance',
      rating: 4,
      date: 'Verified Purchaser • 2 weeks ago',
      title: 'Responsive platform for high-mileage road sessions',
      comment: 'Super light, great road grip even on wet asphalt. If you prefer a relaxed fit with thick training socks, consider going half a size up. Otherwise true to size.',
      helpful: 19,
      voted: false
    }
  ];

  function getProductDetailsData(product) {
    const isRunning = product.category === 'running';
    const isFormal = product.category === 'formal';
    const isStreet = product.category === 'street';
    const isArt = product.category === 'art';
    const isKids = product.category === 'kids';

    // 4 multi-angle high-res views for gallery
    const gallery = [
      product.image,
      isRunning ? 'assets/images/shoe-09-gradient-runner.webp' :
      isFormal ? 'assets/images/shoe-16-black-moccasin.webp' :
      isArt ? 'assets/images/shoe-13-cyber-blade.webp' :
      'assets/images/shoe-12-court-street.webp',
      isRunning ? 'assets/images/shoe-02-red.png' :
      isFormal ? 'assets/images/shoe-05-black-formal.png' :
      'assets/images/shoe-06-white-black.png',
      isRunning ? 'assets/images/shoe-01-grey.png' :
      isFormal ? 'assets/images/shoe-15-nautical-loafer.webp' :
      'assets/images/shoe-03-blue.png'
    ];

    // Swatches matching Flipkart's color selections
    const colorways = [
      { name: product.colorName, image: product.image },
      { name: isRunning ? "Gradient Shadow Fade" : isFormal ? "Espresso Calfskin" : "Minimalist Ice Blue", image: isRunning ? "assets/images/shoe-09-gradient-runner.webp" : isFormal ? "assets/images/shoe-05-black-formal.png" : "assets/images/shoe-03-blue.png" },
      { name: isRunning ? "Crimson Carbon Red" : isFormal ? "Obsidian Glove Leather" : "Clean White Monochrome", image: isRunning ? "assets/images/shoe-02-red.png" : isFormal ? "assets/images/shoe-16-black-moccasin.webp" : "assets/images/shoe-06-white-black.png" }
    ];

    // Full specifications table
    const specs = [
      { label: "Upper Construction", value: isRunning ? "High-Tenacity Monofilament Mesh & Engineered Matrix TPU Overlays" : isFormal ? "Full-Grain Italian Calfskin Leather, Hand-Burnished Patina" : isArt ? "14oz Organic Cotton Canvas & Recycled Technical Trim" : isKids ? "Reinforced Breathable Mesh with Anti-Scuff Synthetic Bumper" : "Supple Nappa Leather & Archival Perforated Suede" },
      { label: "Midsole Technology", value: isRunning ? "Supercritical Nitrogen-Infused Foam + Full-Length 3K Carbon Propulsion Blade" : isFormal ? "Dual-Density Ergonomic OrthoLite Insole with Calfskin Lining" : isArt ? "Hollow Geometric Spring Blade Matrix with High-Rebound Dampening" : isKids ? "Shock-Absorbing Flex-Groove Phylon Compound" : "Responsive Bio-Based EVA with Anatomical Arch Cradle" },
      { label: "Outsole Traction", value: isRunning ? "Cryogenic High-Traction Rubber with Directional Speed Lugs" : isFormal ? "Stacked Heel with Non-Marking Beveled Rubber Insert" : isArt ? "Segmented Pod Compound with Multi-Angle Road Bite" : "Vulcanized Natural Gum Rubber with Micro-Hex Siping" },
      { label: "Heel-to-Toe Drop", value: isRunning ? "8.0 mm (Stack: 35mm heel / 27mm forefoot)" : isFormal ? "20 mm dress stance with anatomical zero-cant footbed" : "6.0 mm neutral balance" },
      { label: "Weight", value: product.weight || "190 grams (size US 9)" },
      { label: "Closure System", value: isFormal ? "Blind Eyelets with Waxed Organic Cotton Laces" : isArt ? "Speed-Lock Cord System with Anodized Toggle" : "Asymmetrical Ergonomic Lacing with Tongue Anchor" },
      { label: "Origin & Atelier", value: isFormal ? "Montebelluna Atelier, Veneto, Italy" : "Porto Footwear Workshop, Portugal" },
      { label: "Style SKU", value: product.artCode },
      { label: "Care Instructions", value: isFormal ? "Condition with natural beeswax polish; buff with horsehair brush" : "Wipe clean with damp micro-fiber cloth; air dry at room temperature" }
    ];

    // Combine user-submitted reviews with curated authentic reviews
    const userStored = state.userReviews[product.id] || [];
    const allReviews = [...userStored, ...DEFAULT_PRODUCT_REVIEWS];

    const totalRatings = 820 + (userStored.length * 15);
    const sumScore = allReviews.reduce((acc, r) => acc + r.rating, 0);
    const avgScore = allReviews.length > 0 ? (sumScore / allReviews.length) : 4.8;

    const starCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    allReviews.forEach(r => {
      starCounts[r.rating] = (starCounts[r.rating] || 0) + 1;
    });

    return {
      gallery,
      colorways,
      specs,
      avgScore,
      totalRatings,
      allReviews,
      starCounts
    };
  }

  function openProductDetails(id) {
    const product = ARCHIVE_PRODUCTS.find(p => p.id === id);
    if (!product) return;

    state.detailsProductId = id;
    state.detailsSelectedSize = state.selectedSizes[id] || product.sizes[2] || product.sizes[0];
    state.detailsActiveColor = product.colorName;
    state.detailsActiveImage = product.image;

    const data = getProductDetailsData(product);

    // Breadcrumbs
    if (el.pdCrumbCat) el.pdCrumbCat.textContent = product.categoryDisplay;
    if (el.pdCrumbTitle) el.pdCrumbTitle.textContent = product.name;

    // Header Meta
    if (el.pdArtCode) el.pdArtCode.textContent = product.artCode;
    if (el.pdTitle) el.pdTitle.textContent = product.name;
    if (el.pdFloatingBadge) el.pdFloatingBadge.textContent = product.tag.toUpperCase();

    // Main Showcase Image
    if (el.pdMainImg) {
      el.pdMainImg.src = state.detailsActiveImage;
      el.pdMainImg.alt = product.name;
    }

    // Pricing & Discounts
    const discountPct = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    if (el.pdDealTag) el.pdDealTag.textContent = product.isNew ? 'Exclusive New Release' : 'Special Atelier Offer';
    if (el.pdDiscountPercent) el.pdDiscountPercent.textContent = `↓ ${discountPct}% OFF`;
    if (el.pdOldPrice) el.pdOldPrice.textContent = `$${product.oldPrice.toFixed(2)}`;
    if (el.pdPrice) el.pdPrice.textContent = `$${product.price.toFixed(2)}`;
    if (el.pdBuyNowText) el.pdBuyNowText.textContent = `BUY AT $${product.price.toFixed(2)}`;

    // Top Rating Strip
    if (el.pdRatingVal) el.pdRatingVal.textContent = `${data.avgScore.toFixed(1)} ★`;
    if (el.pdRatingText) el.pdRatingText.textContent = `${data.totalRatings} Ratings & ${data.allReviews.length} Reviews`;

    // Wishlist Button State
    if (el.pdWishlistBtn) {
      const isSaved = state.wishlist.includes(id);
      el.pdWishlistBtn.classList.toggle('active', isSaved);
    }

    // Color Swatches
    if (el.pdSelectedColorName) el.pdSelectedColorName.textContent = state.detailsActiveColor;
    renderDetailsColorways(data.colorways);

    // Multi-angle Thumbnail Strip
    renderDetailsGallery(data.gallery);

    // Size Selector Grid
    renderDetailsSizes(product.sizes);

    // Overview Description
    if (el.pdNarrative) el.pdNarrative.textContent = product.description;

    // Specifications Table
    renderDetailsSpecs(data.specs);

    // Ratings & Reviews Section
    renderDetailsReviews(data);

    // Reset Review Submission Form
    if (el.pdWriteFormBox) el.pdWriteFormBox.style.display = 'none';
    if (el.pdNewReviewForm) el.pdNewReviewForm.reset();

    // Open Modal
    openModal(el.productDetailsModal);
  }

  function renderDetailsGallery(images) {
    if (!el.pdThumbList) return;
    el.pdThumbList.innerHTML = images.map((imgSrc, idx) => `
      <div class="pd-thumb-item ${idx === 0 ? 'active' : ''}" data-thumb-src="${imgSrc}">
        <img src="${imgSrc}" alt="Angle preview ${idx + 1}">
      </div>
    `).join('');
  }

  function renderDetailsColorways(colorways) {
    if (!el.pdColorSwatches) return;
    el.pdColorSwatches.innerHTML = colorways.map(cw => `
      <button type="button" class="pd-color-pill ${cw.name === state.detailsActiveColor ? 'active' : ''}" data-color-name="${cw.name}" data-color-img="${cw.image}">
        <img src="${cw.image}" alt="${cw.name}">
        <span>${cw.name}</span>
      </button>
    `).join('');
  }

  function renderDetailsSizes(sizes) {
    if (!el.pdSizeGrid) return;
    el.pdSizeGrid.innerHTML = sizes.map(sz => `
      <button type="button" class="pd-size-btn ${sz === state.detailsSelectedSize ? 'active' : ''}" data-size="${sz}">${sz}</button>
    `).join('');
  }

  function renderDetailsSpecs(specs) {
    if (!el.pdSpecsTable) return;
    el.pdSpecsTable.innerHTML = specs.map(s => `
      <tr>
        <td class="spec-lbl">${s.label}</td>
        <td class="spec-val">${s.value}</td>
      </tr>
    `).join('');
  }

  function renderDetailsReviews(data) {
    if (el.pdScoreNum) el.pdScoreNum.textContent = data.avgScore.toFixed(1);
    if (el.pdScoreStars) el.pdScoreStars.textContent = '★'.repeat(Math.round(data.avgScore)) + '☆'.repeat(Math.max(0, 5 - Math.round(data.avgScore)));
    if (el.pdScoreSub) el.pdScoreSub.textContent = `Based on ${data.totalRatings} verified customer ratings`;

    // Star Breakdown Bars
    if (el.pdStarBars) {
      const totalRev = data.allReviews.length || 1;
      const starRows = [5, 4, 3, 2, 1].map(star => {
        const count = data.starCounts[star] || 0;
        const pct = Math.round((count / totalRev) * 100);
        return `
          <div class="star-bar-row">
            <span class="star-bar-label">${star} ★</span>
            <div class="star-bar-track">
              <div class="star-bar-fill" style="width: ${pct}%"></div>
            </div>
            <span class="star-bar-count">${count} (${pct}%)</span>
          </div>
        `;
      }).join('');
      el.pdStarBars.innerHTML = starRows;
    }

    // Customer Reviews List
    if (el.pdReviewsList) {
      el.pdReviewsList.innerHTML = data.allReviews.map(r => `
        <article class="pd-review-card" data-review-id="${r.id}">
          <div class="review-card-top">
            <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
            <span class="review-date">${r.date}</span>
          </div>
          <h4 class="review-title">${r.title}</h4>
          <p class="review-body">${r.comment}</p>
          <div class="review-card-footer">
            <div class="reviewer-meta">
              <span>${r.author}</span>
              <span class="verified-tag">✓ Verified Purchase</span>
            </div>
            <button type="button" class="helpful-btn ${r.voted ? 'voted' : ''}" data-rev-helpful="${r.id}">
              👍 Helpful (${r.helpful})
            </button>
          </div>
        </article>
      `).join('');
    }
  }

  function initProductDetailsListeners() {
    // Close / Back buttons
    if (el.pdBackBtn) el.pdBackBtn.addEventListener('click', () => closeModal(el.productDetailsModal));
    if (el.closeProductDetailsBtn) el.closeProductDetailsBtn.addEventListener('click', () => closeModal(el.productDetailsModal));

    // Wishlist Toggle
    if (el.pdWishlistBtn) {
      el.pdWishlistBtn.addEventListener('click', () => {
        toggleWishlist(state.detailsProductId);
        const isSaved = state.wishlist.includes(state.detailsProductId);
        el.pdWishlistBtn.classList.toggle('active', isSaved);
      });
    }

    // Share Button
    if (el.pdShareBtn) {
      el.pdShareBtn.addEventListener('click', () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href);
          showToast('Product link copied to clipboard.');
        } else {
          showToast('Share link ready: ' + window.location.href);
        }
      });
    }

    // Thumbnail switching
    if (el.pdThumbList) {
      el.pdThumbList.addEventListener('click', (e) => {
        const item = e.target.closest('.pd-thumb-item');
        if (!item) return;
        el.pdThumbList.querySelectorAll('.pd-thumb-item').forEach(t => t.classList.remove('active'));
        item.classList.add('active');
        const src = item.dataset.thumbSrc;
        if (el.pdMainImg && src) {
          el.pdMainImg.style.opacity = '0.3';
          setTimeout(() => {
            el.pdMainImg.src = src;
            el.pdMainImg.style.opacity = '1';
          }, 120);
        }
      });
    }

    // Colorway switching
    if (el.pdColorSwatches) {
      el.pdColorSwatches.addEventListener('click', (e) => {
        const pill = e.target.closest('.pd-color-pill');
        if (!pill) return;
        el.pdColorSwatches.querySelectorAll('.pd-color-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.detailsActiveColor = pill.dataset.colorName;
        state.detailsActiveImage = pill.dataset.colorImg;
        if (el.pdSelectedColorName) el.pdSelectedColorName.textContent = state.detailsActiveColor;
        if (el.pdMainImg) {
          el.pdMainImg.style.opacity = '0.3';
          setTimeout(() => {
            el.pdMainImg.src = state.detailsActiveImage;
            el.pdMainImg.style.opacity = '1';
          }, 120);
        }
        showToast(`Selected color: ${state.detailsActiveColor}`);
      });
    }

    // Size selection
    if (el.pdSizeGrid) {
      el.pdSizeGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.pd-size-btn');
        if (!btn) return;
        el.pdSizeGrid.querySelectorAll('.pd-size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.detailsSelectedSize = btn.dataset.size;
      });
    }

    // Size Guide Trigger
    if (el.pdSizeGuideBtn) {
      el.pdSizeGuideBtn.addEventListener('click', () => {
        closeModal(el.productDetailsModal);
        const guide = document.getElementById('sizeGuide');
        if (guide) guide.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Postal Delivery Checker
    function checkDelivery() {
      const zip = el.pdZipInput ? el.pdZipInput.value.trim() : '';
      if (!zip) {
        showToast('Please enter a valid zip or postal code.');
        return;
      }
      if (el.pdDeliveryResult) {
        el.pdDeliveryResult.innerHTML = `✓ Guaranteed delivery to <strong>${zip}</strong> by <strong>Wednesday, 2 PM</strong> | Free Priority Express Air Dispatch`;
        el.pdDeliveryResult.style.color = '#15803d';
      }
      showToast(`Priority delivery available for zone ${zip}.`);
    }

    if (el.pdCheckZipBtn) el.pdCheckZipBtn.addEventListener('click', checkDelivery);
    if (el.pdZipInput) {
      el.pdZipInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkDelivery();
        }
      });
    }

    // Add to Cart from Details Modal
    if (el.pdAddToCartBtn) {
      el.pdAddToCartBtn.addEventListener('click', () => {
        const product = ARCHIVE_PRODUCTS.find(p => p.id === state.detailsProductId);
        if (!product) return;
        addToCart({
          id: product.id,
          name: `${product.name} (${state.detailsActiveColor || product.colorName})`,
          price: product.price,
          size: state.detailsSelectedSize || product.sizes[2] || product.sizes[0],
          image: state.detailsActiveImage || product.image,
          color: state.detailsActiveColor || product.colorName
        });
      });
    }

    // Buy Now (Instant Direct Checkout matching reference image)
    if (el.pdBuyNowBtn) {
      el.pdBuyNowBtn.addEventListener('click', () => {
        const product = ARCHIVE_PRODUCTS.find(p => p.id === state.detailsProductId);
        if (!product) return;
        addToCart({
          id: product.id,
          name: `${product.name} (${state.detailsActiveColor || product.colorName})`,
          price: product.price,
          size: state.detailsSelectedSize || product.sizes[2] || product.sizes[0],
          image: state.detailsActiveImage || product.image,
          color: state.detailsActiveColor || product.colorName
        });
        closeModal(el.productDetailsModal);
        const totalStr = `$${product.price.toFixed(2)}`;
        const ref = 'CHN-' + Math.floor(10000 + Math.random() * 90000);
        el.orderIdDisplay.textContent = `#${ref}`;
        el.orderTotalPaid.textContent = totalStr;
        closeDrawer(el.cartDrawer, el.cartOverlay);
        openModal(el.checkoutModal);
        showToast(`Instant checkout confirmed for ${product.name}!`);
      });
    }

    // Write a Review Toggle
    if (el.pdWriteReviewBtn) {
      el.pdWriteReviewBtn.addEventListener('click', () => {
        if (!el.pdWriteFormBox) return;
        const isVisible = el.pdWriteFormBox.style.display === 'block';
        el.pdWriteFormBox.style.display = isVisible ? 'none' : 'block';
        if (!isVisible && el.revAuthor) el.revAuthor.focus();
      });
    }

    if (el.cancelReviewBtn) {
      el.cancelReviewBtn.addEventListener('click', () => {
        if (el.pdWriteFormBox) el.pdWriteFormBox.style.display = 'none';
      });
    }

    // Submit Review Form
    if (el.pdNewReviewForm) {
      el.pdNewReviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const author = el.revAuthor.value.trim();
        const rating = parseInt(el.revStars.value, 10);
        const title = el.revTitle.value.trim();
        const comment = el.revComment.value.trim();

        if (!author || !title || !comment) return;

        const newReview = {
          id: 'rev_' + Date.now(),
          author: author,
          rating: rating,
          date: 'Verified Purchaser • Just now',
          title: title,
          comment: comment,
          helpful: 1,
          voted: true
        };

        if (!state.userReviews[state.detailsProductId]) {
          state.userReviews[state.detailsProductId] = [];
        }
        state.userReviews[state.detailsProductId].unshift(newReview);
        localStorage.setItem('chan_user_reviews', JSON.stringify(state.userReviews));

        // Re-render reviews
        const product = ARCHIVE_PRODUCTS.find(p => p.id === state.detailsProductId);
        if (product) {
          const data = getProductDetailsData(product);
          renderDetailsReviews(data);
          if (el.pdRatingVal) el.pdRatingVal.textContent = `${data.avgScore.toFixed(1)} ★`;
          if (el.pdRatingText) el.pdRatingText.textContent = `${data.totalRatings} Ratings & ${data.allReviews.length} Reviews`;
        }

        el.pdNewReviewForm.reset();
        el.pdWriteFormBox.style.display = 'none';
        showToast('Thank you! Your verified atelier review has been posted.');
      });
    }

    // Helpful Button on Reviews
    if (el.pdReviewsList) {
      el.pdReviewsList.addEventListener('click', (e) => {
        const helpfulBtn = e.target.closest('[data-rev-helpful]');
        if (!helpfulBtn) return;
        const isVoted = helpfulBtn.classList.contains('voted');
        helpfulBtn.classList.toggle('voted', !isVoted);
        const countMatch = helpfulBtn.textContent.match(/\((\d+)\)/);
        let count = countMatch ? parseInt(countMatch[1], 10) : 0;
        count = isVoted ? Math.max(0, count - 1) : count + 1;
        helpfulBtn.textContent = `👍 Helpful (${count})`;
        showToast(isVoted ? 'Helpful vote removed.' : 'Marked review as helpful.');
      });
    }
  }

  /* ==========================================================================
     SIZE GUIDE CALCULATOR
     ========================================================================== */
  function initCalculator() {
    function compute() {
      const val = parseFloat(el.calcLengthInput.value);
      if (isNaN(val) || val < 20 || val > 35) return;

      const activeFit = document.querySelector('.fit-opt-btn.active')?.dataset.fit || 'regular';
      let offset = 0;
      if (activeFit === 'snug') offset = -0.5;
      if (activeFit === 'wide') offset = 0.5;

      let us = 9.0 + (val - 27.0) * 1.25 + offset;
      us = Math.round(us * 2) / 2;
      us = Math.max(6, Math.min(13, us));

      const eu = (us + 33.5).toFixed(1);
      const uk = (us - 1.0).toFixed(1);

      el.recUS.textContent = `US ${us.toFixed(1)}`;
      el.recEU.textContent = `EU ${eu}`;
      el.recUK.textContent = `UK ${uk}`;

      if (activeFit === 'wide') {
        el.recNote.textContent = "Adjusted half a size up for wider forefoot volume and comfortable toe expansion.";
      } else if (activeFit === 'snug') {
        el.recNote.textContent = "Adjusted half a size down for secure performance lockdown with zero heel slip.";
      } else {
        el.recNote.textContent = "Fits true to size with 8mm of expansion allowance in the forefoot.";
      }
    }

    el.calcLengthInput.addEventListener('input', compute);

    document.querySelectorAll('.fit-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.fit-opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        compute();
      });
    });

    compute();
  }

  /* ==========================================================================
     GENERAL EVENT LISTENERS
     ========================================================================== */
  function setupListeners() {
    // Header shadow on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        el.siteHeader.classList.add('scrolled');
      } else {
        el.siteHeader.classList.remove('scrolled');
      }
    });

    // Search
    el.headerSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderArchiveCatalog();
    });

    el.headerSearchBtn.addEventListener('click', () => {
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });

    // Mobile nav
    el.mobileMenuBtn.addEventListener('click', () => {
      el.mobileNavDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => el.mobileNavDrawer.classList.remove('open'));
    });

    // Category Tabs
    el.categoryTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill');
      if (!btn) return;
      el.categoryTabs.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeFilter = btn.dataset.filter;
      renderArchiveCatalog();
    });

    // Nav bar category triggers
    document.querySelectorAll('[data-filter-nav]').forEach(link => {
      link.addEventListener('click', () => {
        const filter = link.dataset.filterNav;
        state.activeFilter = filter;
        el.categoryTabs.querySelectorAll('.filter-pill').forEach(b => {
          b.classList.toggle('active', b.dataset.filter === filter);
        });
        renderArchiveCatalog();
      });
    });

    // Sort Select
    el.catalogSortSelect.addEventListener('change', (e) => {
      state.sortMode = e.target.value;
      renderArchiveCatalog();
    });

    // View Mode Toggle (Grid vs Lookbook)
    if (el.viewGridBtn && el.viewLookbookBtn) {
      el.viewGridBtn.addEventListener('click', () => {
        state.viewMode = 'grid';
        el.viewGridBtn.classList.add('active');
        el.viewLookbookBtn.classList.remove('active');
        el.productsGrid.classList.remove('lookbook-mode');
      });

      el.viewLookbookBtn.addEventListener('click', () => {
        state.viewMode = 'lookbook';
        el.viewLookbookBtn.classList.add('active');
        el.viewGridBtn.classList.remove('active');
        el.productsGrid.classList.add('lookbook-mode');
      });
    }

    // Size table row click sync with calculator
    document.querySelectorAll('.editorial-table tbody tr').forEach(row => {
      row.addEventListener('click', () => {
        document.querySelectorAll('.editorial-table tbody tr').forEach(r => r.classList.remove('selected-row'));
        row.classList.add('selected-row');
        const cmCell = row.querySelector('td:last-child');
        if (cmCell && el.calcLengthInput) {
          const val = parseFloat(cmCell.textContent);
          if (!isNaN(val)) {
            el.calcLengthInput.value = val.toFixed(1);
            el.calcLengthInput.dispatchEvent(new Event('input'));
          }
        }
      });
    });

    // Reset Catalog
    el.resetCatalogBtn.addEventListener('click', () => {
      state.activeFilter = 'all';
      state.searchQuery = '';
      el.headerSearchInput.value = '';
      el.categoryTabs.querySelectorAll('.filter-pill').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === 'all');
      });
      renderArchiveCatalog();
    });

    // Policy Modals
    el.openPrivacyBtn.addEventListener('click', () => openModal(el.privacyModal));
    el.closePrivacyBtn.addEventListener('click', () => closeModal(el.privacyModal));
    el.acceptPrivacyBtn.addEventListener('click', () => closeModal(el.privacyModal));

    el.openTermsBtn.addEventListener('click', () => openModal(el.termsModal));
    el.closeTermsBtn.addEventListener('click', () => closeModal(el.termsModal));
    el.acceptTermsBtn.addEventListener('click', () => closeModal(el.termsModal));

    el.closeConfirmationBtn.addEventListener('click', () => {
      closeModal(el.checkoutModal);
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });

    // Initialize Product Details & Reviews Handlers
    initProductDetailsListeners();

    // Modal backdrops
    [el.productDetailsModal, el.checkoutModal, el.privacyModal, el.termsModal].forEach(m => {
      if (m) {
        m.addEventListener('click', (e) => {
          if (e.target === m) closeModal(m);
        });
      }
    });

    // Newsletter submit
    el.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = el.newsletterEmail.value.trim();
      if (!email) return;
      showToast(`Subscribed: ${email}. Lookbook dispatch will follow.`);
      el.newsletterEmail.value = '';
    });

    // Escape Key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDrawer(el.cartDrawer, el.cartOverlay);
        closeDrawer(el.wishlistDrawer, el.wishlistOverlay);
        closeModal(el.productDetailsModal);
        closeModal(el.checkoutModal);
        closeModal(el.privacyModal);
        closeModal(el.termsModal);
        el.mobileNavDrawer.classList.remove('open');
      }
    });
  }

  /* Helpers */
  function openDrawer(drawer, overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  }

  function closeDrawer(drawer, overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }

  function openModal(modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showToast(msg) {
    const pill = document.createElement('div');
    pill.className = 'toast-item';
    pill.textContent = msg;
    el.toastShelf.appendChild(pill);

    setTimeout(() => {
      pill.classList.add('fadeout');
      setTimeout(() => pill.remove(), 250);
    }, 2800);
  }

  init();
});
