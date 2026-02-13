
import { getActiveAnnouncement } from '../modules/campaigns.js';

export function renderHeader() {
    const activeAnnouncement = getActiveAnnouncement();
    const headers = [];

    // Announcement Bar
    /*
    if (activeAnnouncement) {
        const announceBar = document.createElement('div');
        announceBar.className = 'bg-primary text-white text-xs font-bold py-2 px-4 text-center tracking-wide';
        announceBar.innerHTML = activeAnnouncement.text;
        headers.push(announceBar);
    }
    */

    const header = document.createElement('header');
    header.className = 'sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-light shadow-sm transition-all duration-300';
    header.innerHTML = `
        <style>
            .nav-link {
                position: relative;
                padding-bottom: 4px;
            }
            .nav-link::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 0;
                height: 2px;
                background: #ec9213;
                transition: all 0.3s ease;
                transform: translateX(-50%);
            }
            .nav-link:hover::after {
                width: 100%;
            }
            .nav-link.active::after {
                width: 100%;
            }
        </style>
        <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-20 flex items-center justify-between py-4 gap-4">
            <!-- Elegant Logo -->
            <a href="index.html" class="flex items-center gap-3 group shrink-0">
                <div class="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <span class="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">nutrition</span>
                </div>
                <div class="flex flex-col">
                    <h2 class="text-2xl font-black leading-none tracking-tight text-text-dark">HAKTAN</h2>
                    <span class="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em] mt-0.5">Gurme Market</span>
                </div>
            </a>
            
            <!-- Mobile Menu Button -->
            <button id="mobileMenuBtn" class="md:hidden text-text-dark p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <span class="material-symbols-outlined text-3xl">menu</span>
            </button>

            <!-- Compact & Styled Search -->
            <div class="flex-1 max-w-lg mx-8 hidden md:block">
                <div class="relative group">
                    <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                    <input id="searchInput" type="text" placeholder="Tatlı bir şeyler mi arıyorsun?..."
                        class="w-full pl-11 pr-4 py-2.5 rounded-xl border border-border-light bg-gray-50/50 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400" />
                </div>
            </div>

            <!-- Header Actions -->
            <div class="flex items-center gap-6">
                <a href="shoping_page.html" class="group flex items-center gap-2 text-text-dark hover:text-primary transition-colors p-1.5 px-3 rounded-xl hover:bg-primary/5">
                    <div class="relative">
                        <span class="material-symbols-outlined text-[28px]">shopping_bag</span>
                        <span class="cart-count absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-lg ring-2 ring-white group-hover:scale-110 transition-transform" style="display:none">0</span>
                    </div>
                </a>
            </div>
        </div>
        
        <!-- Refined Desktop Nav -->
        <nav class="hidden md:flex w-full bg-white/50 border-t border-border-light/50 justify-center">
            <div class="container mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                <ul class="flex items-center justify-center gap-10 py-3.5 text-xs font-bold uppercase tracking-widest text-text-dark/80">
                    <li><a class="nav-link hover:text-primary transition-colors" href="index.html">Ana Sayfa</a></li>
                    <li><a class="nav-link hover:text-primary transition-colors" href="product_category.html?cat=kuruyemis">Kuruyemiş</a></li>
                    <li><a class="nav-link hover:text-primary transition-colors" href="product_category.html?cat=sarkuteri">Şarküteri</a></li>
                    <li><a class="nav-link hover:text-primary transition-colors" href="product_category.html?cat=aktar">Aktar</a></li>
                    <li><a class="nav-link hover:text-primary transition-colors" href="product_category.html?cat=bakliyat">Bakliyat</a></li>
                    <li><a class="nav-link hover:text-primary transition-colors" href="product_category.html?cat=pestil-kome">Pestil & Köme</a></li>
                    <li><a class="nav-link hover:text-primary transition-colors" href="product_category.html?cat=yoresel">Yöresel</a></li>
                </ul>
            </div>
        </nav>

        <!-- Mobile Menu (Hidden default) -->
        <div id="mobileMenu" class="hidden fixed inset-0 bg-white z-[60] p-4 flex flex-col">
            <div class="flex justify-between items-center mb-6">
                 <h2 class="text-xl font-bold">Menü</h2>
                 <button id="closeMobileMenu" class="text-gray-500 hover:text-red-500">
                    <span class="material-symbols-outlined text-3xl">close</span>
                 </button>
            </div>
             <div class="mb-6">
                <input id="mobileSearchInput" type="text" placeholder="Ürün ara..." class="w-full p-3 bg-gray-100 rounded-lg">
            </div>
            <ul class="space-y-4 text-lg font-medium">
                <li><a href="index.html" class="block py-2 border-b border-gray-100">Ana Sayfa</a></li>
                <li><a href="product_category.html?cat=kuruyemis" class="block py-2 border-b border-gray-100">Kuruyemiş</a></li>
                <li><a href="product_category.html?cat=sarkuteri" class="block py-2 border-b border-gray-100">Şarküteri</a></li>
                <li><a href="product_category.html?cat=aktar" class="block py-2 border-b border-gray-100">Aktar</a></li>
                <li><a href="product_category.html?cat=bakliyat" class="block py-2 border-b border-gray-100">Bakliyat</a></li>
                <li><a href="product_category.html?cat=pestil-kome" class="block py-2 border-b border-gray-100">Pestil & Köme</a></li>
                <li><a href="product_category.html?cat=yoresel" class="block py-2 border-b border-gray-100">Yöresel Ürünler</a></li>
            </ul>
        </div>
    `;

    // Inject
    if (headers.length > 0) {
        headers.forEach(h => document.body.prepend(h));
        document.body.prepend(header); // Header comes after announcement (or before? usually announcement is top)
        // Actually prepend reverses order if called sequentially on body.
        // If we want [Announcement] [Header]
        // We prepend Header first, then Announcement.
        // Let's fix logic:
        // body.prepend(header) -> body = [header, ...]
        // body.prepend(announce) -> body = [announce, header, ...]
    } else {
        document.body.prepend(header);
    }

    // Attach Event Listeners
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    const close = document.getElementById('closeMobileMenu');

    if (btn && menu && close) {
        btn.addEventListener('click', () => menu.classList.remove('hidden'));
        close.addEventListener('click', () => menu.classList.add('hidden'));
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
