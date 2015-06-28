function php_file(file){
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
			php_echo("<div id=\"post\">\n");
			php_echo("<h2>"+posts[i]+"</h2>\n");
			php_echo("<text>"+posts[i+1]+"</text>\n");
			php_echo("</div>\n");
		}
            }
        }
    }
    rawFile.send(null);
}

function php_echo(text){
	document.getElementById('posts').innerHTML += text;
}

function load_posts(){
	posts = php_file("posts.txt");

}