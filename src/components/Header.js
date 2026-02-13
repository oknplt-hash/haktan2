import { getActiveAnnouncement } from '../modules/campaigns.js';

const headerTheme = {
    // Beğenmezseniz bu iki sınıfı eski haline (`bg-white/90` ve `bg-white`) alarak hızlıca geri dönebilirsiniz.
    desktopBg: 'bg-amber-50/90',
    mobilePanelBg: 'bg-amber-50'
};

const navItems = [
    { label: 'Ana Sayfa', href: 'index.html', icon: 'home' },
    { label: 'Kuruyemiş', href: 'product_category.html?cat=kuruyemis', icon: 'grain' },
    { label: 'Şarküteri', href: 'product_category.html?cat=sarkuteri', icon: 'lunch_dining' },
    { label: 'Aktar', href: 'product_category.html?cat=aktar', icon: 'psychiatry' },
    { label: 'Bakliyat', href: 'product_category.html?cat=bakliyat', icon: 'nutrition' },
    { label: 'Pestil & Köme', href: 'product_category.html?cat=pestil-kome', icon: 'cookie' },
    { label: 'Yöresel Ürünler', href: 'product_category.html?cat=yoresel', icon: 'storefront' }
];

function getCurrentRouteState() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const params = new URLSearchParams(window.location.search);
    return {
        path: currentPath,
        cat: params.get('cat')
    };
}

function isNavItemActive(item, state) {
    const url = new URL(item.href, window.location.origin + '/');
    const itemPath = url.pathname.split('/').pop();
    const itemCat = url.searchParams.get('cat');

    if (itemPath !== state.path) return false;
    if (!itemCat) return true;
    return itemCat === state.cat;
}

export function renderHeader() {
    const activeAnnouncement = getActiveAnnouncement();
    const headers = [];
    const routeState = getCurrentRouteState();

    /*
    if (activeAnnouncement) {
        const announceBar = document.createElement('div');
        announceBar.className = 'bg-primary text-white text-xs font-bold py-2 px-4 text-center tracking-wide';
        announceBar.innerHTML = activeAnnouncement.text;
        headers.push(announceBar);
    }
    */

    const desktopNavMarkup = navItems.map((item) => {
        const active = isNavItemActive(item, routeState);
        const stateClass = active
            ? 'bg-primary text-white shadow-md shadow-primary/20'
            : 'text-text-main hover:text-primary hover:bg-primary/10';

        return `
            <li>
                <a class="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${stateClass}" href="${item.href}">
                    <span class="material-symbols-outlined text-[18px]">${item.icon}</span>
                    <span class="text-sm font-semibold">${item.label}</span>
                </a>
            </li>
        `;
    }).join('');

    const mobileNavMarkup = navItems.map((item) => {
        const active = isNavItemActive(item, routeState);
        const stateClass = active
            ? 'bg-primary/10 border-primary/40 text-primary'
            : 'bg-white border-border-light text-text-main hover:border-primary/30 hover:bg-primary/5';

        return `
            <li>
                <a href="${item.href}" class="flex items-center justify-between rounded-2xl border px-4 py-3 transition-all ${stateClass}">
                    <span class="inline-flex items-center gap-2 font-semibold">
                        <span class="material-symbols-outlined text-[20px]">${item.icon}</span>
                        ${item.label}
                    </span>
                    <span class="material-symbols-outlined text-lg opacity-60">arrow_forward_ios</span>
                </a>
            </li>
        `;
    }).join('');

    const header = document.createElement('header');
    header.className = `sticky top-0 z-50 border-b border-border-light/80 ${headerTheme.desktopBg} backdrop-blur-xl`;
    header.innerHTML = `
        <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex items-center justify-between py-3 gap-4">
            <a href="index.html" class="flex items-center gap-3 shrink-0">
                <span class="material-symbols-outlined text-primary text-3xl">nutrition</span>
                <div class="flex flex-col">
                    <h2 class="text-xl font-bold leading-none tracking-tight text-text-main">HAKTAN</h2>
                    <span class="text-xs text-text-muted font-medium tracking-wide">Kuruyemiş Şarküteri Sarayı</span>
                </div>
            </a>

            <button id="mobileMenuBtn" class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors" aria-label="Menüyü aç">
                <span class="material-symbols-outlined text-2xl">menu</span>
            </button>

            <div class="flex-1 max-w-xl mx-4 hidden md:block">
                <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xl">search</span>
                    <input id="searchInput" type="text" placeholder="Ürün, kategori veya marka ara..."
                        class="w-full pl-10 pr-4 py-2.5 rounded-full border border-border-light bg-secondary/80 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                </div>
            </div>

            <div class="flex items-center gap-4">
                <a href="shoping_page.html" class="flex items-center gap-2 text-text-main hover:text-primary transition-colors relative" aria-label="Sepet">
                    <div class="relative">
                        <span class="material-symbols-outlined text-[26px]">shopping_cart</span>
                        <span class="cart-count absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm" style="display:none">0</span>
                    </div>
                </a>
            </div>
        </div>

        <nav class="hidden md:flex w-full justify-center pb-3">
            <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-20 overflow-x-auto no-scrollbar">
                <ul class="flex items-center gap-2 w-max mx-auto whitespace-nowrap">
                    ${desktopNavMarkup}
                </ul>
            </div>
        </nav>

        <div id="mobileMenu" class="hidden fixed inset-0 z-[60] bg-slate-950/45 backdrop-blur-sm p-4">
            <div class="ml-auto w-full max-w-sm h-full ${headerTheme.mobilePanelBg} rounded-3xl shadow-2xl flex flex-col p-4">
                <div class="flex justify-between items-center mb-5">
                    <div>
                        <p class="text-xs uppercase tracking-[0.24em] text-text-muted">Navigasyon</p>
                        <h2 class="text-xl font-bold text-text-main">Menü</h2>
                    </div>
                    <button id="closeMobileMenu" class="h-10 w-10 inline-flex items-center justify-center rounded-full bg-slate-100 text-text-main hover:bg-slate-200 transition-colors" aria-label="Menüyü kapat">
                        <span class="material-symbols-outlined text-2xl">close</span>
                    </button>
                </div>
                <div class="mb-4">
                    <div class="relative">
                        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xl">search</span>
                        <input id="mobileSearchInput" type="text" placeholder="Ürün ara..." class="w-full pl-10 pr-4 py-3 bg-slate-100 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20">
                    </div>
                </div>
                <ul class="space-y-2 overflow-y-auto custom-scrollbar pr-1">
                    ${mobileNavMarkup}
                </ul>
            </div>
        </div>
    `;

    if (headers.length > 0) {
        headers.forEach(h => document.body.prepend(h));
        document.body.prepend(header);
    } else {
        document.body.prepend(header);
    }

    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    const close = document.getElementById('closeMobileMenu');

    if (btn && menu && close) {
        btn.addEventListener('click', () => menu.classList.remove('hidden'));
        close.addEventListener('click', () => menu.classList.add('hidden'));
        menu.addEventListener('click', (e) => {
            if (e.target === menu) menu.classList.add('hidden');
        });
    }

    const handleSearch = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            window.location.href = 'product_category.html?q=' + encodeURIComponent(e.target.value.trim());
        }
    };

    const sInput = document.getElementById('searchInput');
    const mSortedInput = document.getElementById('mobileSearchInput');

    if (sInput) sInput.addEventListener('keydown', handleSearch);
    if (mSortedInput) mSortedInput.addEventListener('keydown', handleSearch);
}
