<?php
	function load_posts(){
		$posts = file("posts.txt");
		for($i=0;$i<count($posts);$i+=3){
			echo "<div id=\"post\">\n";
			echo "<h2>".$posts[$i]."</h2>\n";
			echo "<text>".$posts[$i+1]."</text>\n";
			echo "</div>\n";
		}
	}
?>