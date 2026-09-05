const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const themeColor = document.querySelector('meta[name="theme-color"]');

function updateThemeButton() {
  const isDark = root.dataset.theme === 'dark';
  toggle.setAttribute('aria-pressed', String(isDark));
  toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  toggle.querySelector('.theme-label').textContent = isDark ? 'Light' : 'Dark';
  if (themeColor) themeColor.setAttribute('content', isDark ? '#111315' : '#fbfbf9');
}

updateThemeButton();

toggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeButton();
});
