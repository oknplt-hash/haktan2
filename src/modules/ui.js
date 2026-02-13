
// ============================================================
// UI MODULE
// ============================================================
import { CATEGORY_NAMES, formatPrice, renderStars } from './utils.js';
import { addToCart, getCartCount } from './cart.js'; // Circular dependency risk? No, utils is fine.

export function updateCartBadge(count) {
    count = count !== undefined ? count : getCartCount();
    document.querySelectorAll(".cart-count").forEach((el) => {
        el.textContent = count;
        el.style.display = count > 0 ? "flex" : "none";
    });
}

export function showToast(msg, type) {
    type = type || "success";
    const icons = { success: "check_circle", error: "error", info: "info" };
    const colors = { success: "text-green-400", error: "text-red-400", info: "text-blue-400" };
    const toast = document.createElement("div");
    toast.className = "fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl z-[200] flex items-center gap-2 text-sm font-medium";
    toast.style.animation = "slideUp 0.3s ease-out";
    toast.innerHTML = '<span class="material-symbols-outlined ' + (colors[type] || colors.success) + ' text-lg">' + (icons[type] || icons.success) + "</span>" + msg;
    document.body.appendChild(toast);
    setTimeout(function () {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.3s";
    }, 2500);
    setTimeout(function () {
        toast.remove();
    }, 3000);
}

// We need HaktanApp global for inline onclick handlers, so we'll wrap addToCart to use global
export function renderProductCard(product) {
    const discount = product.oldPrice
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : 0;

    // Note: Inline onclicks rely on HaktanApp being global
    return (
        '<div class="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#ec9213]/50 transition-all hover:shadow-lg flex flex-col h-full">' +
        '<a href="product_detail.html?id=' + product.id + '" class="relative aspect-square overflow-hidden bg-gray-50 block">' +
        (discount > 0
            ? '<span class="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded z-10 shadow-sm">-' + discount + "%</span>"
            : "") +
        '<img alt="' + product.name + '" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="' + product.image + '" />' +
        "</a>" +
        '<button onclick="event.stopPropagation();HaktanApp.addToCart(' + product.id + ');HaktanApp.showToast(\'Sepete eklendi!\')" ' +
        'class="absolute bottom-2 right-2 bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#ec9213] hover:text-white border border-gray-100 z-10" style="position:absolute">' +
        '<span class="material-symbols-outlined text-[18px]">add_shopping_cart</span></button>' +
        '<div class="p-2.5 md:p-3 flex flex-col flex-1">' +
        '<div class="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">' +
        (CATEGORY_NAMES[product.category] || product.category) +
        "</div>" +
        '<a href="product_detail.html?id=' + product.id + '" class="text-gray-900 font-bold text-[13px] md:text-[14px] mb-1.5 line-clamp-2 leading-tight hover:text-[#ec9213] transition-colors">' +
        product.name + " (" + product.weight + ")</a>" +
        '<div class="flex items-center gap-0.5 mb-2">' +
        renderStars(product.rating) +
        '<span class="text-gray-400 text-[10px] ml-0.5 font-medium">(' + product.reviews + ")</span></div>" +
        '<div class="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">' +
        '<div class="flex flex-col">' +
        (product.oldPrice
            ? '<span class="text-gray-400 text-[10px] line-through">' + formatPrice(product.oldPrice) + "</span>"
            : "") +
        '<span class="text-[#ec9213] text-base font-black">' + formatPrice(product.price) + "</span>" +
        "</div>" +
        '<button onclick="event.stopPropagation();HaktanApp.addToCart(' + product.id + ');HaktanApp.showToast(\'Sepete eklendi!\')" ' +
        'class="bg-[#ec9213] hover:bg-[#d68311] text-white px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-colors flex items-center gap-1">' +
        '<span class="material-symbols-outlined text-[14px]">add_shopping_cart</span></button>' +
        "</div></div></div>"
    );
}
