/* Этот скрипт использует имена классов theme-menu__button, theme-dark, theme-light и theme-auto;
еще атрибуты disabled и data-theme. Поэтому их нельзя менять в HTML. */


function changeTheme(theme) {
  
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
  

}

(function initTheme() {
  
  const theme = localStorage.getItem('theme');
  if (theme) {
    
    changeTheme(theme);
    
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll('.theme-menu__button');





  themeButtons.forEach((button) => {
    button.onclick = () => {
      location.reload()
      changeTheme(button.getAttribute('data-theme'));
      
      setDisabled(button.getAttribute('data-theme'));
      
    };
  });
});
