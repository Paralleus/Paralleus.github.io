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
 
function loadmain(){
    document.getElementById("loader").style.display="none";
    loadjscssfile("js/scroller/jquery.mCustomScrollbar.css?time="+Date.now(), "css")
    loadjscssfile("css/style.css?time="+Date.now(), "css")
    loadjscssfile("http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", "js")
    loadjscssfile("js/paralleus.js?time="+Date.now(), "js")
}

function loadscroll(){
    loadjscssfile("js/scroller/jquery.mCustomScrollbar.concat.min.js?time="+Date.now(), "js")
    loadjscssfile("js/load_scroller.js?time="+Date.now(), "js")
    document.getElementById("loader").style.display="none";
}
