<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type = "text/css">
		html{
			padding: 0;
			margin: 0;
		}
	</style>
</head>
<body>
	<!--time() devuelve milisegundos desde 1970 en adelante	-->
	<script type="text/javascript" src="lib/phaser.min.js?v=<?php echo time() ?>"></script>
	<script type="text/javascript" src="js/states/Preload.js?v=<?php echo time() ?>"></script>
	<script type="text/javascript" src="js/states/Menu.js?v=<?php echo  time() ?>"></script>
	<script type="text/javascript" src="js/states/Game.js?v=<?php echo  time() ?>"></script>
	<script type="text/javascript" src="js/states/GameOver.js?v=<?php echo  time() ?>"></script>
	<script type="text/javascript" src="js/main.js?v=<?php echo time() ?>"></script>

</body>
</html>

