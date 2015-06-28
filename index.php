<?php include 'php/paralleus.php';?>
<html>
<head>
<title>Paralleus</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<link rel="stylesheet" href="js/scroller/jquery.mCustomScrollbar.css">
<link rel="stylesheet" href="css/style.css">
<script src="php/paralleus.js"></script>
</head>
<body>
<div id="logo">Paralleus <sup><font size="5">php</font></sup></div><p></p>
<div id="posts" class="mCustomScrollbar" data-mcs-theme="light">
<?php load_posts();?>
</div>
</body></html>
<script src="js/scroller/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="js/load_scroller.js"></script>
<center><p><a onclick="window.open('index.html','_self')" style="font-family:arial;color:#FFF;">Javascript Version</a></center>