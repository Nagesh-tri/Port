// ========== Theme Toggle ========== //
function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.querySelector('.theme-toggle');
  const logo = document.getElementById('site-logo');
  const isLight = body.getAttribute('data-theme') === 'light';

  const newTheme = isLight ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
  toggleBtn.textContent = isLight ? '☀️' : '🌙';
  logo.src = isLight ? 'images/logo_nagesh.png' : 'images/logo_nagesh_light.png';
  // Save to local storage
  localStorage.setItem('theme', newTheme);
}

// ========== Apply Saved Theme on Load ========== //
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);

  const toggleBtn = document.querySelector('.theme-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = savedTheme === 'light' ? '☀️' : '🌙';
  }

  // Start fake loading bar
  const fill = document.getElementById("progress-fill");
  const percentText = document.getElementById("load-percent");

  if (fill && percentText) {
    let percent = 0;
    const interval = setInterval(() => {
      if (percent < 100) {
        percent++;
        fill.style.width = percent + "%";
        percentText.innerText = `Loading... ${percent}%`;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }
});

// ========== Hide Loader on Window Load ========== //
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = 0;
      setTimeout(() => loader.style.display = "none", 500);
    }
  }, 500);
});
