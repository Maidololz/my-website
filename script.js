// 共用的頁首與頁尾：改這裡，所有頁面都會一起更新
const SITE_NAME = "YourName";

const NAV = [
  { href: "index.html", zh: "首頁", en: "Main" },
  { href: "reading.html", zh: "閱讀", en: "Reading" },
  { href: "blog.html", zh: "部落格", en: "Blog" },
  { href: "questions.html", zh: "問答", en: "Questions" },
  { href: "activities.html", zh: "活動", en: "Activities" },
];

const SOCIALS = [
  { name: "Instagram", url: "https://instagram.com/", icon: '<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3.1 0-4.1.1C4.3 2.3 2.3 4.3 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.2 3.6 2.2 5.6 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.6-.2 5.6-2.2 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.2-3.6-2.2-5.6-5.8-5.8C15.1 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C4 5.3 5.3 4 8 3.9c1-.1 1.3-.1 4-.1z"/>' },
  { name: "Facebook", url: "https://facebook.com/", icon: '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>' },
  { name: "GitHub", url: "https://github.com/", icon: '<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>' },
  { name: "LinkedIn", url: "https://linkedin.com/", icon: '<path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9.5h3V19zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5h2.9v1.3c.4-.8 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.6V19z"/>' },
];

function t(zh, en) {
  return `<span data-lang="zh">${zh}</span><span data-lang="en">${en}</span>`;
}

function renderHeader() {
  const current = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(
    (n) => `<li><a href="${n.href}" class="${n.href === current ? "active" : ""}">${t(n.zh, n.en)}</a></li>`
  ).join("");

  document.querySelector("header").innerHTML = `
    <nav class="nav container">
      <a href="index.html" class="logo">${SITE_NAME}</a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-actions">
        <button class="lang-toggle" type="button">中文 / ENG</button>
        <button class="theme-toggle" type="button" aria-label="切換明暗模式">
          <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="4.5" fill="currentColor"/>
            <path d="M12 1.5v2.5M12 20v2.5M1.5 12H4M20 12h2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/>
          </svg>
          <svg class="moon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/>
          </svg>
        </button>
        <button class="menu-btn" type="button" aria-label="Menu">☰</button>
      </div>
    </nav>`;

  document.querySelector(".lang-toggle").addEventListener("click", () => {
    setLang(document.documentElement.lang === "en" ? "zh-Hant" : "en");
  });
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    setTheme(isDark() ? "light" : "dark");
  });
  updateThemeButton();
  document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("open");
  });
}

function renderFooter() {
  const icons = SOCIALS.map(
    (s) => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}"><svg viewBox="0 0 24 24">${s.icon}</svg></a>`
  ).join("");
  document.querySelector("footer").innerHTML = `
    <div class="container">
      <div class="socials">${icons}</div>
      Copyright © ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.
    </div>`;
}

function setLang(lang) {
  document.documentElement.lang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function initLang() {
  let lang = "zh-Hant";
  try { lang = localStorage.getItem("lang") || lang; } catch (e) {}
  setLang(lang);
}

const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function isDark() {
  const theme = document.documentElement.dataset.theme;
  return theme ? theme === "dark" : systemDark.matches;
}

function updateThemeButton() {
  const btn = document.querySelector(".theme-toggle");
  if (btn) btn.classList.toggle("is-dark", isDark());
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("theme", theme); } catch (e) {}
  updateThemeButton();
}

function initTheme() {
  let theme = null;
  try { theme = localStorage.getItem("theme"); } catch (e) {}
  if (theme) document.documentElement.dataset.theme = theme;
  systemDark.addEventListener("change", updateThemeButton);
}

function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}

initLang();
initTheme();
renderHeader();
renderFooter();
initFadeIn();
