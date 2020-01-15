let menu = document.getElementsByClassName("menu")[0]
let hideBTN = document.getElementsByClassName("hide-menu-btn")[0]
let chkBox = document.getElementById("chk")

menu.onclick = function() {
        chkBox.checked = false
}

hideBTN.onclick = function() {
        chkBox.checked = false
}