var body = document.body,html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

function sectionTitleFix(){
    var parent = document.getElementsByClassName("graphic-design")[0]
    var w = parent.getElementsByClassName("branding")[0].offsetWidth;
    var child = parent.getElementsByClassName("section-title")[0]
    child.style.fontSize = "calc(" + w/6 + "px - .5rem)"
    console.log(w/96)

}

function moveHighlight(event){
    var highlight = document.getElementsByClassName("highlight-pointer")[0]
    if (event.pageY<height){
        highlight.style.top = event.pageY + "px"
        highlight.style.left = event.pageX + "px"
    }
}
document.addEventListener('mousemove', moveHighlight)
window.onresize = sectionTitleFix