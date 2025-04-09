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


// ////other s
var tablinks = document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contains");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontain of tabcontains){
        tabcontain.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}



const showMoreButton = document.getElementById('show-more-button');
const projects = document.querySelectorAll('.work');

let visibleProjects = 3;

showMoreButton.addEventListener('click', function() {
  visibleProjects += 3;
  for (let i = 0; i < projects.length; i++) {
    if (i < visibleProjects) {
      projects[i].classList.add('show-project');
    } else {
      projects[i].classList.remove('show-project');
    }
  }
  
  if (visibleProjects >= projects.length) {
    showMoreButton.style.display = 'none';
  }
});
