"use strict";

const iconPaths = {
  "arrow-right": '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  "arrow-up-right": '<path d="M7 17 17 7M7 7h10v10"/>',
  "map-pin": '<path d="M20 10c0 5-8 10-8 10s-8-5-8-10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
  heart: '<path d="M20.8 8.8c0 4.3-8.8 9.5-8.8 9.5s-8.8-5.2-8.8-9.5a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z"/>',
  bag: '<rect x="4" y="7" width="16" height="14" rx="3"/><path d="M8 9V6a4 4 0 1 1 8 0v3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  grid: '<rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.5"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1.5"/><rect x="3.5" y="14" width="6.5" height="6.5" rx="1.5"/><rect x="14" y="14" width="6.5" height="6.5" rx="1.5"/>',
  tool: '<path d="M13.4 7.1a4.5 4.5 0 0 1 6.3-2.8l-2.6 2.6 2 2 2.6-2.6A4.5 4.5 0 0 1 16 12.5L8 20.4a2 2 0 0 1-2.8-2.8l8-8a4.5 4.5 0 0 1 .2-2.5Z"/>',
  layers: '<path d="m3 8 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 18l9 5 9-5"/>',
  implant: '<path d="M7 3h10v4H7zm2 4 1 13 2 1 2-1 1-13M8 10l8 2m-7 2 6 2m-5 2 4 1"/>',
  endo: '<path d="M14 4h5v5h-5zM17 9l-8 10-4 2 2-4L14 9m-3 4 2 2m-5 1 2 2"/>',
  shield: '<path d="M12 22s8-3.5 8-11V5l-8-3-8 3v6c0 7.5 8 11 8 11Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  package: '<path d="m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4m-9 4v10M7.5 5l9 4"/>',
  message: '<path d="M20.5 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-3.8-.9L4 20l1-3.8a8.5 8.5 0 1 1 15.5-4.7Z"/><path d="M9 12h6"/>',
  home: '<path d="M3.5 10 12 3l8.5 7v8.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V10Z"/><path d="M9 20v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5"/>',
  phone: '<path d="M7.3 3.6H4.9A1.9 1.9 0 0 0 3 5.7a17.8 17.8 0 0 0 15.3 15.3 1.9 1.9 0 0 0 2.1-1.9v-2.4a1.3 1.3 0 0 0-1.1-1.3l-2.8-.5a1.4 1.4 0 0 0-1.4.5l-.8 1A14.8 14.8 0 0 1 7.6 9.7l1-.8a1.4 1.4 0 0 0 .5-1.4l-.5-2.8a1.3 1.3 0 0 0-1.3-1.1Z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.1"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  download: '<path d="M12 3v12m-4-4 4 4 4-4M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m3.5 17 4.5-4 4 3 4.5-5 4.5 4"/>',
  sparkles: '<path d="m12 2 2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2Z"/>',
  truck: '<path d="M3 5h12v11H3zm12 4h3l3 3v4h-6"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>'
};

function icon(name, size = 24) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || ""}</svg>`;
}

const categories = [
  { id: "all", label: "Все товары", icon: "grid" },
  { id: "tools", label: "Инструменты", icon: "tool" },
  { id: "materials", label: "Материалы", icon: "layers" },
  { id: "implants", label: "Имплантация", icon: "implant" },
  { id: "endo", label: "Эндодонтия", icon: "endo" },
  { id: "supplies", label: "Расходники", icon: "shield" }
];

const products = [
  { id: "forceps", category: "tools", name: "Набор экстракционных щипцов", detail: "Набор", description: "Комплект стоматологических щипцов для разных групп зубов. Состав набора можно уточнить у магазина." },
  { id: "composite", category: "materials", name: "Светоотверждаемый композит", detail: "Шприц", description: "Композитный материал в шприце для реставраций. Уточните у магазина доступные оттенки и фасовку." },
  { id: "implant", category: "implants", name: "Титановый имплант с абатментом", detail: "Комплект", description: "Имплант и абатмент. Уточните у магазина доступные размеры и совместимость компонентов." },
  { id: "files", category: "endo", name: "Набор эндодонтических файлов", detail: "Набор", description: "Эндодонтические файлы в футляре. Уточните у магазина доступные размеры и комплектацию." },
  { id: "gloves", category: "supplies", name: "Нитриловые перчатки", detail: "Упаковка", description: "Смотровые нитриловые перчатки. Размеры и количество в упаковке можно уточнить у магазина." },
  { id: "burs", category: "tools", name: "Набор алмазных боров", detail: "Набор", description: "Набор стоматологических алмазных боров. Уточните у магазина формы, размеры и зернистость." },
  { id: "silicone", category: "materials", name: "Силикон для оттисков", detail: "Комплект", description: "Оттискный силикон для стоматологии. Состав комплекта и фасовку можно уточнить у магазина." },
  { id: "mirror", category: "tools", name: "Стоматологическое зеркало и зонд", detail: "Комплект", description: "Стоматологическое зеркало и зонд для осмотра. Комплектацию можно уточнить у магазина." }
];

const productById = new Map(products.map(product => [product.id, product]));
const categoryById = new Map(categories.map(category => [category.id, category]));
const categoriesElement = document.querySelector("#categories");
const productsElement = document.querySelector("#products");
const resultLabel = document.querySelector("#result-label");
const search = document.querySelector("#search");
const sort = document.querySelector("#sort");
const catalog = document.querySelector("#catalog");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");
const toast = document.querySelector("#toast");
const storageKey = "stommig-shop-v1";
const orderUrl = "https://wa.me/79936666676";
const collator = new Intl.Collator("ru");
const pluralRules = new Intl.PluralRules("ru");
const numberFormat = new Intl.NumberFormat("ru");

let selectedCategory = "all";
let activeDialog = null;
let returnFocus = null;
let installPrompt = null;
let toastTimer;

function loadState() {
  const initial = { cart: {}, favorites: new Set() };

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) return initial;

    const favorites = Array.isArray(saved.favorites) ? saved.favorites : [];
    initial.favorites = new Set(favorites.filter(id => productById.has(id)));
    for (const [id, amount] of Object.entries(saved.cart || {})) {
      if (productById.has(id) && Number.isInteger(amount) && amount > 0) {
        initial.cart[id] = Math.min(amount, 99);
      }
    }
  } catch {
    return initial;
  }

  return initial;
}

const state = loadState();

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({
      cart: state.cart,
      favorites: [...state.favorites]
    }));
  } catch {
    // The current session still works when local storage is unavailable.
  }
}

function pluralProducts(count) {
  const nouns = { one: "товар", few: "товара", many: "товаров", other: "товара" };
  return `${numberFormat.format(count)} ${nouns[pluralRules.select(count)]}`;
}

function setCounts() {
  const cartCount = Object.values(state.cart).reduce((total, count) => total + count, 0);
  for (const [key, count] of [["cart", cartCount], ["favorites", state.favorites.size]]) {
    const name = key === "cart" ? "Корзина" : "Избранное";
    document.querySelectorAll(`[data-count="${key}"]`).forEach(element => {
      element.textContent = count ? numberFormat.format(count) : "";
      element.hidden = count === 0;
      element.parentElement.setAttribute("aria-label", count ? `${name}, ${pluralProducts(count)}` : name);
    });
  }
}

function renderCategories() {
  categoriesElement.innerHTML = categories.map(category => `
    <button class="category-btn" type="button" data-category="${category.id}" aria-pressed="${selectedCategory === category.id}">
      <span class="category-icon">${icon(category.icon, 21)}</span>
      ${category.label}
    </button>
  `).join("");
}

function normalizeSearch(value) {
  return value.toLocaleLowerCase("ru").replace(/ё/g, "е").trim();
}

function visibleProducts() {
  const words = normalizeSearch(search.value).split(/\s+/).filter(Boolean);
  const filtered = products.filter(product => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;

    const category = categoryById.get(product.category);
    const searchable = normalizeSearch(`${product.name} ${category.label} ${product.description}`);
    return words.every(word => searchable.includes(word));
  });

  if (sort.value === "name-asc") filtered.sort((first, second) => collator.compare(first.name, second.name));
  if (sort.value === "name-desc") filtered.sort((first, second) => collator.compare(second.name, first.name));
  return filtered;
}

function placeholder(size = 30) {
  return `<span class="media-placeholder">${icon("image", size)}<span>(ваша фотка)</span></span>`;
}

function favoriteButton(product) {
  const selected = state.favorites.has(product.id);
  const label = selected ? "Убрать из избранного" : "Добавить в избранное";
  return `<button class="favorite-btn" type="button" data-favorite="${product.id}" aria-pressed="${selected}" aria-label="${label}: ${product.name}">${icon("heart", 19)}</button>`;
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <button class="product-media" type="button" data-product="${product.id}" aria-label="Открыть товар: ${product.name}">
          ${placeholder()}
        </button>
        ${favoriteButton(product)}
      </div>
      <div class="product-body">
        <p class="product-meta">${categoryById.get(product.category).label}</p>
        <button class="product-title" type="button" data-product="${product.id}">${product.name}</button>
        <div class="product-bottom">
          <span class="product-price">(цена)</span>
          <button class="add-btn" type="button" data-add="${product.id}" aria-label="Добавить в корзину: ${product.name}">${icon("plus", 20)}</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const filtered = visibleProducts();
  resultLabel.textContent = pluralProducts(filtered.length);
  productsElement.innerHTML = filtered.length ? filtered.map(productCard).join("") : `
    <div class="catalog-empty">
      ${icon("search", 30)}
      <h3>Товары не найдены</h3>
      <p>Попробуйте изменить запрос или выбрать другую категорию.</p>
      <button class="button secondary" type="button" data-reset>Сбросить фильтры</button>
    </div>`;
}

function quantityControls(product, amount) {
  return `
    <div class="quantity-control" aria-label="Количество">
      <button class="quantity-btn" type="button" data-quantity="-1" data-id="${product.id}" aria-label="Уменьшить количество: ${product.name}">${icon("minus", 16)}</button>
      <span>${amount}</span>
      <button class="quantity-btn" type="button" data-quantity="1" data-id="${product.id}" aria-label="Увеличить количество: ${product.name}" ${amount >= 99 ? "disabled" : ""}>${icon("plus", 16)}</button>
    </div>`;
}

function checkoutLink(rows) {
  const items = rows.map(([id, count]) => `• ${productById.get(id).name} — ${count} шт.`);
  const message = ["Здравствуйте! Хочу уточнить наличие и цены:", "", ...items].join("\n");
  return `${orderUrl}?text=${encodeURIComponent(message)}`;
}

function dialogRow(product, amount) {
  const action = amount ? quantityControls(product, amount) : `
    <button class="add-btn" type="button" data-add="${product.id}" aria-label="Добавить в корзину: ${product.name}">${icon("plus", 20)}</button>
    ${favoriteButton(product)}`;

  return `
    <div class="dialog-row">
      <button class="dialog-row-image" type="button" data-product="${product.id}" aria-label="Открыть товар: ${product.name}">${placeholder(19)}</button>
      <div class="dialog-row-detail">
        <button class="product-title" type="button" data-product="${product.id}">${product.name}</button>
        <span class="product-price">(цена)</span>
      </div>
      <div class="dialog-actions">${action}</div>
    </div>`;
}

function emptyDialog(iconName, title, description) {
  return `
    <div class="dialog-empty">
      <span class="category-icon">${icon(iconName, 28)}</span>
      <h3>${title}</h3>
      <p>${description}</p>
      <a class="button primary" href="#catalog" data-close data-view="catalog">Перейти к каталогу ${icon("arrow-right", 18)}</a>
    </div>`;
}

function installInstructions() {
  if (window.matchMedia("(display-mode: standalone)").matches || navigator.standalone) {
    return '<p>«СтомМиг» уже открыт как установленное приложение.</p>';
  }

  return `
    <p>Добавьте «СтомМиг» на главный экран, чтобы открывать каталог одним касанием.</p>
    <ul>
      <li><strong>iPhone и iPad</strong> · В Safari нажмите «Поделиться», затем «На экран Домой».</li>
      <li><strong>Android</strong> · В меню Chrome выберите «Установить приложение» или «Добавить на главный экран».</li>
      <li><strong>Компьютер</strong> · В Chrome или Edge найдите кнопку установки в адресной строке или меню браузера.</li>
    </ul>`;
}

function dialogParts() {
  if (activeDialog.type === "cart") {
    const items = Object.entries(state.cart);
    const content = items.length
      ? `<div class="dialog-list">${items.map(([id, amount]) => dialogRow(productById.get(id), amount)).join("")}</div>`
      : emptyDialog("bag", "Корзина пуста", "Добавьте товары, чтобы отправить список магазину.");
    const footer = items.length
      ? `<div class="dialog-footer"><a class="button primary" href="${checkoutLink(items)}" target="_blank" rel="noopener noreferrer">${icon("message", 19)} Заказать в WhatsApp</a></div>`
      : "";

    return { title: "Корзина", content, footer };
  }

  if (activeDialog.type === "favorites") {
    const items = [...state.favorites];
    const content = items.length
      ? `<div class="dialog-list">${items.map(id => dialogRow(productById.get(id))).join("")}</div>`
      : emptyDialog("heart", "Здесь будут любимые товары", "Нажмите на сердечко на карточке товара, чтобы сохранить его.");

    return { title: "Избранное", content };
  }

  if (activeDialog.type === "product") {
    const product = productById.get(activeDialog.id);
    const content = `
      <div class="dialog-product">
        <div class="product-media">${placeholder(34)}</div>
        <div class="dialog-description">
          <p class="product-meta">${categoryById.get(product.category).label} · ${product.detail}</p>
          <p>${product.description}</p>
          <span class="product-price">(цена)</span>
        </div>
      </div>`;
    const footer = `
      <div class="dialog-footer dialog-actions">
        <button type="button" class="button primary" data-add="${product.id}">${icon("bag", 19)} Добавить в корзину</button>
        ${favoriteButton(product)}
      </div>`;

    return { title: product.name, content, footer };
  }

  return { title: "Установить приложение", content: `<div class="install-instructions">${installInstructions()}</div>` };
}

function renderDialog() {
  if (!activeDialog) return;
  const { title, content, footer = "" } = dialogParts();
  modalContent.innerHTML = `
    <div class="dialog-header">
      <h2 id="dialog-title">${title}</h2>
      <button class="dialog-close icon-button" type="button" data-close aria-label="Закрыть">${icon("x", 21)}</button>
    </div>
    <div class="dialog-body">${content}</div>
    ${footer}`;
}

function setMobileTab(tab) {
  document.querySelectorAll(".mobile-tab").forEach(element => {
    const selected = (element.dataset.view || element.dataset.open) === tab;
    element.classList.toggle("is-active", selected);
    if (selected) {
      element.setAttribute("aria-current", "page");
    } else {
      element.removeAttribute("aria-current");
    }
  });
}

function locationTab() {
  return window.location.hash === "#catalog" ? "catalog" : "home";
}

function openDialog(type, source, id) {
  if (!modal.open) returnFocus = source;
  activeDialog = { type, id };
  renderDialog();
  if (!modal.open) modal.showModal();
  modal.querySelector(".dialog-close").focus();
  if (type === "cart" || type === "favorites") setMobileTab(type);
}

function notify(message) {
  window.clearTimeout(toastTimer);
  toast.innerHTML = `${icon("check", 18)}<span>${message}</span>`;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function updateFavoriteButtons(id) {
  document.querySelectorAll(`[data-favorite="${id}"]`).forEach(button => {
    const selected = state.favorites.has(id);
    const label = selected ? "Убрать из избранного" : "Добавить в избранное";
    button.setAttribute("aria-pressed", selected);
    button.setAttribute("aria-label", `${label}: ${productById.get(id).name}`);
  });
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    notify("Товар убран из избранного");
  } else {
    state.favorites.add(id);
    notify("Товар в избранном");
  }

  saveState();
  setCounts();
  updateFavoriteButtons(id);
  if (activeDialog?.type === "favorites") {
    renderDialog();
    const nextAction = modal.querySelector("[data-favorite], .dialog-empty a");
    (nextAction || modal.querySelector(".dialog-close")).focus();
  }
}

function changeQuantity(id, difference, source) {
  const previous = state.cart[id] || 0;
  const amount = Math.min(99, previous + difference);
  if (amount === previous) {
    notify("Можно добавить до 99 единиц товара");
    return;
  }

  if (amount > 0) {
    state.cart[id] = amount;
  } else {
    delete state.cart[id];
  }

  saveState();
  setCounts();
  if (activeDialog?.type === "cart") {
    renderDialog();
    const sameAction = modal.querySelector(`[data-quantity="${source.dataset.quantity}"][data-id="${id}"]:not(:disabled)`);
    const nextAction = modal.querySelector("[data-quantity]:not(:disabled), .dialog-empty a");
    (sameAction || nextAction || modal.querySelector(".dialog-close")).focus();
  } else {
    notify("Товар в корзине");
  }
}

document.querySelectorAll("[data-icon]").forEach(placeholderElement => {
  placeholderElement.innerHTML = icon(placeholderElement.dataset.icon, Number(placeholderElement.dataset.size) || 24);
});
modal.setAttribute("aria-labelledby", "dialog-title");

document.addEventListener("click", async event => {
  const control = event.target.closest("button, a");
  if (!control) return;

  const { category, reset, open, favorite, product, add, quantity, id, close, view } = control.dataset;

  if (category) {
    selectedCategory = category;
    categoriesElement.querySelectorAll("[data-category]").forEach(button => {
      button.setAttribute("aria-pressed", button === control);
    });
    renderProducts();
  }

  if (reset !== undefined) {
    search.value = "";
    selectedCategory = "all";
    renderCategories();
    renderProducts();
    categoriesElement.querySelector("[data-category]").focus();
  }

  if (open === "install" && installPrompt) {
    const prompt = installPrompt;
    installPrompt = null;
    try {
      await prompt.prompt();
    } catch {
      openDialog(open, control);
    }
  } else if (open) {
    openDialog(open, control);
  }

  if (favorite) toggleFavorite(favorite);
  if (product) openDialog("product", control, product);
  if (add) changeQuantity(add, 1, control);
  if (quantity) changeQuantity(id, Number(quantity), control);
  if (close !== undefined) modal.close();
  if (view) setMobileTab(view);
});

modal.addEventListener("click", event => {
  if (event.target !== modal) return;
  const bounds = modal.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right ||
    event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) modal.close();
});

modal.addEventListener("close", () => {
  activeDialog = null;
  setMobileTab(locationTab());
  if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
  returnFocus = null;
});

search.addEventListener("input", () => {
  if (search.value.trim() && selectedCategory !== "all") {
    selectedCategory = "all";
    renderCategories();
  }
  renderProducts();
});
search.form?.addEventListener("submit", event => {
  event.preventDefault();
  search.blur();
  window.location.hash = "catalog";
  catalog.scrollIntoView();
});
sort.addEventListener("change", renderProducts);
window.addEventListener("hashchange", () => setMobileTab(locationTab()));
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
});
window.addEventListener("appinstalled", () => {
  installPrompt = null;
  notify("Приложение установлено");
});

renderCategories();
renderProducts();
setCounts();
setMobileTab(locationTab());

if ("serviceWorker" in navigator && window.isSecureContext) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
