function load_posts(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var posts = String(rawFile.responseText).split("\n");
		for(i=0;i<posts.length;i+=3){
			php_echo("<div id=\"post\">\n<h2>"+posts[i]+"</h2>\n<text>"+posts[i+1]+"</text>\n</div>\n");
		}
            }
        }
    }
    rawFile.send(null);
}

function load_pages(){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "pages.txt?time="+Date.now(), false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var pages = String(rawFile.responseText).split("\n");
                var toolbar = "";
                var page = "";
		for(i=0;i<pages.length;i+=3){
			if(pages[i+1].indexOf("URL:") > -1){
				toolbar += "&nbsp;&nbsp;<a href='"+pages[i+1].replace("URL:","")+"'>"+pages[i]+"</a>&nbsp;&nbsp;"
			} else {
				toolbar += "&nbsp;&nbsp;<a href='#"+pages[i]+"'>"+pages[i]+"</a>&nbsp;&nbsp;"
				pages += "<page id="+pages[i]+"><h2>"+pages[i]+"</h2><text>"+pages[i+1]+"</text><page>"
			}
		}
		document.getElementById('toolbar').innerHTML = toolbar
		document.getElementById('pages').innerHTML = page
            }
        }
    }
    rawFile.send(null);
}

function iconify(){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "links.txt?time="+Date.now(), false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var links = String(rawFile.responseText).split("\n");
                var data = "<center>";
		for(i=0;i<links.length;i+=3){
			if(links[i].indexOf("FAVICON:") > -1){
				if(links[i+1].indexOf("LINK:") > -1){
					data+="<a href='"+links[i+1].replace("LINK:","")+"'><img  id='link' style='margin: 0px !important;width: 16px !important;' height='16' width='16' src='"+links[i].replace("FAVICON:","")+"'></a>&nbsp;&nbsp;&nbsp;"
				}
			}
		}
		document.getElementById('links').innerHTML = data+"</center>"
            }
        }
    }
    rawFile.send(null);
}

function php_echo(text){
	document.getElementById('blog').innerHTML += text;
}

function initialize(){
	if(window.location.href.indexOf("#") < 0){
		window.open("#blog","_self");
	}
	load_pages();
	load_posts("posts.txt?time="+Date.now());
	iconify();
}
