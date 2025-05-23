const useBurger = () => {
  const burgerBtn = document.querySelector('.burger');
  const burgerMenu = document.querySelector('.header__right');
  const overlay = document.querySelector('.overlay');
  const body = document.body;

  const closeBurger = () => {
    burgerBtn.classList.remove('burger--active');
    burgerMenu.classList.remove('header__right--visible');
    overlay.classList.remove('overlay--visible');
    body.classList.remove('body--fixed');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('header__right--visible');
    overlay.classList.toggle('overlay--visible');
    body.classList.toggle('body--fixed');
  });

  overlay.addEventListener('click', closeBurger);

  burgerMenu.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('nav__link')) closeBurger();
  });
};
useBurger();

const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('.header__switcher-checkbox');
  const themeSwitcherText = document.querySelector('.header__switcher-text');
  const themeTargetDataset = themeTarget.dataset;

  const theme = localStorage.getItem('theme') || 'light';
  themeTargetDataset.theme = theme;

  if (theme === 'dark') {
    themeSwitcher.checked = true;
    themeSwitcherText.textContent = 'Dark';
  } else {
    themeSwitcher.checked = false;
    themeSwitcherText.textContent = 'Light';
  }

  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme === 'light') {
      themeTargetDataset.theme = 'dark';
      themeSwitcherText.textContent = 'Dark';
      localStorage.setItem('theme', 'dark');
      if (window.switchMapTheme) {
        window.switchMapTheme('dark');
      }
    } else {
      themeTargetDataset.theme = 'light';
      themeSwitcherText.textContent = 'Light';
      localStorage.setItem('theme', 'light');
      if (window.switchMapTheme) {
        window.switchMapTheme('light');
      }
    }
  });
};
useTheme();


const useToggleBtn = () => {
  const btn = document.querySelector('.portfolio__cards-btn');

  const toggleMorePortfolio = () => {
    const cards = document.querySelectorAll('.portfolio__cards-item');
    if (btn.textContent === 'Hide') {
      btn.textContent = 'Show more';
      cards.forEach((card, index) =>
        index > 2
          ? (card.style.display = 'none')
          : (card.style.display = 'block'),
      );
    } else {
      btn.textContent = 'Hide';
      cards.forEach((card) => (card.style.display = 'block'));
    }
  };

  btn.addEventListener('click', toggleMorePortfolio);
};
useToggleBtn();
