
// ============================================================
// CAMPAIGNS & ANNOUNCEMENTS MODULE
// ============================================================

const DEFAULT_SLIDERS = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=2000&auto=format&fit=crop",
        title: "Saray Lezzetleri Kapınızda",
        subtitle: "Lüks seçkilerimizin saraylara layık tadını deneyimleyin. Taptaze kavrulmuş Antep fıstığından egzotik kuru meyvelere kadar en iyisi burada.",
        buttonText: "Alışverişe Başla",
        buttonLink: "product_category.html",
        startDate: "2023-10-20",
        endDate: "2023-10-25",
        clicks: 420,
        active: true,
        type: "banner"
    },
    {
        id: 2,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc3irhx7nvPaeQsyLzFVwZQGlDzClUU3doMMTp2E6c152FZpKH_QtA_SNflYtfVwL9-HcGG9mjUjbyg-VP5sstgn2qLhvNkcEJ6xdPJedpMQto2OTy-fUavdd0a02mkdynmwL_vANJbIk8kB79yhDPZn4wdtmdteRl9V5zDJ5hZNzp3MzGXdRjp-zuO_kB89Gz0DqE53YWyZTJY2aM9Bes6CR0KYipsw5SD-Zdc52Hj3tuBfpA6GnEfK1qt-5vYmndf6JjfjEJPVg",
        title: "Yeni Ürünler: Geleneksel Lokumlar",
        subtitle: "Afyon lokumları stoklarımızda.",
        buttonText: "Keşfet",
        buttonLink: "product_category.html?cat=lokum",
        startDate: "2023-11-01",
        endDate: "2023-11-05",
        clicks: 0,
        active: false,
        status: "planned", // New status field
        type: "banner"
    }
];

const DEFAULT_ANNOUNCEMENTS = [
    {
        id: 1,
        text: "🎉 Açılışa özel tüm ürünlerde %10 indirim! Kod: HAKTAN10",
        active: false,
        type: "info"
    }
];

// ---- Sliders ----

export function getSliders() {
    const sliders = JSON.parse(localStorage.getItem("haktan_sliders_v2"));
    if (!sliders) {
        localStorage.setItem("haktan_sliders_v2", JSON.stringify(DEFAULT_SLIDERS));
        return DEFAULT_SLIDERS;
    }
    return sliders;
}

export function saveSliders(sliders) {
    localStorage.setItem("haktan_sliders_v2", JSON.stringify(sliders));
}

export function addSlider(slider) {
    const sliders = getSliders();
    slider.id = Date.now();
    sliders.push(slider);
    saveSliders(sliders);
}

export function updateSlider(id, updates) {
    const sliders = getSliders();
    const idx = sliders.findIndex(s => s.id == id);
    if (idx !== -1) {
        sliders[idx] = { ...sliders[idx], ...updates };
        saveSliders(sliders);
    }
}

export function deleteSlider(id) {
    const sliders = getSliders().filter(s => s.id != id);
    saveSliders(sliders);
}

// ---- Announcements ----

export function getAnnouncements() {
    const announcements = JSON.parse(localStorage.getItem("haktan_announcements"));
    if (!announcements) {
        localStorage.setItem("haktan_announcements", JSON.stringify(DEFAULT_ANNOUNCEMENTS));
        return DEFAULT_ANNOUNCEMENTS;
    }
    return announcements;
}

export function saveAnnouncements(list) {
    localStorage.setItem("haktan_announcements", JSON.stringify(list));
}

export function addAnnouncement(item) {
    const list = getAnnouncements();
    item.id = Date.now();
    list.push(item);
    saveAnnouncements(list);
}

export function updateAnnouncement(id, updates) {
    const list = getAnnouncements();
    const idx = list.findIndex(a => a.id == id);
    if (idx !== -1) {
        list[idx] = { ...list[idx], ...updates };
        saveAnnouncements(list);
    }
}

export function deleteAnnouncement(id) {
    const list = getAnnouncements().filter(a => a.id != id);
    saveAnnouncements(list);
}

export function getActiveAnnouncement() {
    return getAnnouncements().find(a => a.active);
}

// ---- Weekly Campaign Products ----

export function getCampaignProducts() {
    return JSON.parse(localStorage.getItem("haktan_campaign_products")) || [];
}

export function setCampaignProducts(productIds) {
    localStorage.setItem("haktan_campaign_products", JSON.stringify(productIds));
}

export function addCampaignProduct(productId) {
    const ids = getCampaignProducts();
    const id = Number(productId);
    if (!ids.includes(id)) {
        ids.push(id);
        setCampaignProducts(ids);
    }
}

export function removeCampaignProduct(productId) {
    const id = Number(productId);
    const ids = getCampaignProducts().filter(existingId => existingId !== id);
    setCampaignProducts(ids);
}
