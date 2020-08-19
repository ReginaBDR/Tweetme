//Dark-light mode toggle with local storage

var themeSwitch = document.querySelector('input[name=theme]');
if(themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  themeSwitch.addEventListener('change', function(event){
    trans()
    resetTheme(); // update color theme
  });

  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
  };

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('themeSwitch', 'light'); // reset theme selection 
    } 
  };
}

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}