
console.log("JavaScript file is connected!");



function openTab(tabName) {
    var i, tabContents, tabLinks;
    tabContents = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}
var sidemenu=document.getElementById("sidemenu");
function openSideMenu(){
    sidemenu.style.right="0px";
}
function closeSideMenu() {
    sidemenu.style.right = "-200px";
}