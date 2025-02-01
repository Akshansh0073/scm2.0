console.log("Script loaded");

let currentTheme = getTheme();
changeTheme();

//Todo
function changeTheme(){

    //set to web page
    document.querySelector("html").classList.add(currentTheme);

    //set the listener
    const changeThemeButton = document.querySelector("#theme_change_button");
    // change the text of button
    changeThemeButton.querySelector('span').textContent = 
    currentTheme == "light" ? "Dark" : "Light";

    changeThemeButton.addEventListener("click",(event) => {
        const oldTheme =currentTheme;
        console.log("change theme button clicked");
        if (currentTheme ==="dark") {
            currentTheme = "light";
        } else {
            currentTheme = "dark";
        }

        //localstorage mein update karenge
        setTheme(currentTheme);

        document.querySelector('html').classList.remove(oldTheme);

        document.querySelector("html").classList.add(currentTheme);

        // change the text of button
        changeThemeButton.querySelector('span').textContent = 
        currentTheme == "light" ? "Dark" : "Light";
    });

}

//set theme to localstorage

function setTheme(theme){
 localStorage.setItem("theme", theme);
}

//get theme from localstorage

function getTheme(){
    let theme = localStorage.getItem("theme");
    if(theme) return theme;
    else return "light";
}


//change current page theme 

