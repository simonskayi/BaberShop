let navIcon = document.getElementById ("navIcon");
let navDrawer = document.getElementById ("navDrawer");



navIcon.onclick= function () {
    if (navDrawer.style.opacity=== "" || navDrawer.style.opacity === "0") {
        navDrawer.style.opacity = "1";
       navIcon.src = "images/close.png"
    } else  {
        navDrawer.style.opacity = "0";
        navIcon.src = "images/menu.png"
        
        
    }
}


