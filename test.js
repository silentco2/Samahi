function sectionTitleFix(){
    var parent = document.getElementsByClassName("graphic-design")[0]
    var w = parent.getElementsByClassName("branding")[0].offsetWidth;
    var child = parent.getElementsByClassName("section-title")[0]
    child.style.fontSize = "calc(" + w/6 + "px - .5rem)"
    console.log(w/96)

}
window.onresize = sectionTitleFix