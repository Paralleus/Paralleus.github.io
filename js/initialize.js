function loadjscssfile(filename, filetype){
    if (filetype=="js"){
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
 
loadjscssfile("http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", "js")
loadjscssfile("js/scroller/jquery.mCustomScrollbar.css", "css")
loadjscssfile("css/style.css", "css")
loadjscssfile("js/paralleus.js", "js")
loadjscssfile("js/scroller/jquery.mCustomScrollbar.concat.min.js", "js")
loadjscssfile("js/load_scroller.js", "js")
