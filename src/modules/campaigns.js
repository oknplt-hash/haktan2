
// ============================================================
// CAMPAIGNS & ANNOUNCEMENTS MODULE
// ============================================================

const DEFAULT_SLIDERS = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?q=80&w=1600&auto=format&fit=crop",
        title: "Taze Kavrulmuş Kuruyemiş",
        subtitle: "Antep fıstığından kaju cevizine, bademden fındığa… Taze kavrulmuş, birinci sınıf kuruyemişlerin en seçkinleri.",
        buttonText: "Keşfet",
        buttonLink: "product_category.html?cat=kuruyemis",
        startDate: new Date().toISOString().split('T')[0],
        endDate: "2026-12-31",
        clicks: 0,
        active: true,
        type: "banner",
        tag: "En Çok Tercih Edilen",
        icon: "local_fire_department"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
        title: "Premium Şarküteri",
        subtitle: "Sucuk, pastırma, kaşar peyniri ve daha fazlası… Geleneksel tariflerle hazırlanan şarküteri lezzetleri sofranızda.",
        buttonText: "Keşfet",
        buttonLink: "product_category.html?cat=sarkuteri",
        startDate: new Date().toISOString().split('T')[0],
        endDate: "2026-12-31",
        clicks: 0,
        active: true,
        type: "banner",
        tag: "Gurme Seçim",
        icon: "restaurant"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1600&auto=format&fit=crop",
        title: "Şifalı Bitkiler & Baharatlar",
        subtitle: "Doğanın şifa deposu… Bitkisel çaylar, baharatlar ve aromatik bitkiler ile sağlıklı yaşamın kapısını aralayın.",
        buttonText: "Keşfet",
        buttonLink: "product_category.html?cat=aktar",
        startDate: new Date().toISOString().split('T')[0],
        endDate: "2026-12-31",
        clicks: 0,
        active: true,
        type: "banner",
        tag: "Doğal & Şifalı",
        icon: "spa"
    }
];

const DEFAULT_ANNOUNCEMENTS = [
    {
        id: 1,
        text: "🎉 Açılışa özel tüm ürünlerde %10 indirim! Kod: HAKTAN10",
        active: true,
        type: "info"
    },
    {
        id: 2,
        text: "🚚 500 TL ve üzeri alışverişlerinizde kargo ücretsiz!",
        active: false,
        type: "success"
    }
];

const STORAGE_KEY_SLIDERS = "haktan_sliders_v4";
const STORAGE_KEY_ANN = "haktan_announcements_v4";

export function getSliders() {
    try {
        let sliders = JSON.parse(localStorage.getItem(STORAGE_KEY_SLIDERS));
        if (!sliders || !Array.isArray(sliders) || sliders.length === 0) {
            console.log("HaktanApp: Initializing Sliders (v4)...");
            localStorage.setItem(STORAGE_KEY_SLIDERS, JSON.stringify(DEFAULT_SLIDERS));
            return DEFAULT_SLIDERS;
        }
        return sliders;
    } catch (e) {
        console.error("HaktanApp: Error loading sliders:", e);
        return DEFAULT_SLIDERS;
    }
}

export function saveSliders(sliders) {
    localStorage.setItem(STORAGE_KEY_SLIDERS, JSON.stringify(sliders));
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
    try {
        let announcements = JSON.parse(localStorage.getItem(STORAGE_KEY_ANN));
        if (!announcements || !Array.isArray(announcements) || announcements.length === 0) {
            console.log("HaktanApp: Initializing Announcements (v4)...");
            localStorage.setItem(STORAGE_KEY_ANN, JSON.stringify(DEFAULT_ANNOUNCEMENTS));
            return DEFAULT_ANNOUNCEMENTS;
        }
        return announcements;
    } catch (e) {
        console.error("HaktanApp: Error loading announcements:", e);
        return DEFAULT_ANNOUNCEMENTS;
    }
}

export function saveAnnouncements(list) {
    localStorage.setItem(STORAGE_KEY_ANN, JSON.stringify(list));
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
