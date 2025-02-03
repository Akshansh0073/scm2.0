console.log("Script loaded");

// change theme work
let currentTheme = getTheme();

document.addEventListener('DOMContentLoaded',() => {
    
  });
changeTheme();

// Todo
function changeTheme(){

    // set to web page
    changePageTheme(currentTheme,currentTheme);

    // set the listener
    const changeThemeButton = document.querySelector("#theme_change_button");
    // change the text of button
    changeThemeButton.querySelector('span').textContent = 
    currentTheme == "light" ? "Dark" : "Light";
    const oldTheme = currentTheme;
    changeThemeButton.addEventListener("click",(event) => {
        
        console.log("change theme button clicked");
        if (currentTheme ==="dark") {
            currentTheme = "light";
        } else {
            currentTheme = "dark";
        }

        changePageTheme(currentTheme, oldTheme);
        
    });

}


// set theme to localstorage

function setTheme(theme){
 localStorage.setItem("theme", theme);
}

// get theme from localstorage

function getTheme(){
    let theme = localStorage.getItem("theme");
    if(theme) return theme;
    else return "light";
}


// change current page theme 
function changePageTheme(theme, oldTheme){
    // localstorage mein update karenge
    setTheme(currentTheme);

    document.querySelector('html').classList.remove(oldTheme);

    document.querySelector("html").classList.add(theme);

    // change the text of button
    document.querySelector('#theme_change_button').querySelector('span').textContent = 
    theme == "light" ? "Dark" : "Light";

}
