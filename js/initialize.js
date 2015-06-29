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
document.head.innerHTML += "<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>";
$(window).load(function(){$(".loader").fadeOut("slow");})
document.head.innerHTML += "<style>.loader {position: fixed;left: 0px;top: 0px;width: 100%;height: 100%;z-index: 9999;background: url('http://media.giphy.com/media/147upcc99OCGOI/giphy.gif') 50% 50%	no-repeat rgb(255,255,255);}</style>";

loadjscssfile("http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", "js")
loadjscssfile("js/scroller/jquery.mCustomScrollbar.css?time="+Date.now(), "css")
loadjscssfile("css/style.css?time="+Date.now(), "css")
loadjscssfile("js/paralleus.js?time="+Date.now(), "js")
loadjscssfile("js/scroller/jquery.mCustomScrollbar.concat.min.js?time="+Date.now(), "js")
loadjscssfile("js/load_scroller.js?time="+Date.now(), "js")

