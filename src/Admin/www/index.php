<?php
const PATH_PFX = '../../';
require '../../core/index.php';
$ss = new \core\services\SessionService;
?>
<!doctype html>
<html lang="<?=(VIEW['ADMIN']['meta']['lang']) ?>">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width">
	<?=('<link rel="stylesheet" href="' . VIEW['ADMIN']['styles'] . '?v=' . TIMESTAMP . '">') ?>
	<title><?=(VIEW['ADMIN']['meta']['title']) ?></title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
	<meta name="description" content="<?=(VIEW['ADMIN']['meta']['description']) ?>">
	<meta name="keywords" content="<?=(VIEW['ADMIN']['meta']['keywords']) ?>">
	<meta name="robots" content="<?=(VIEW['ADMIN']['meta']['robots']) ?>">
	<meta name="og:url" content="<?=(VIEW['ADMIN']['url']) ?>">
	<meta name="author" content="<?=(VIEW['@']['author_meta']) ?>">

	<script>
		window.WARP_ENVIRONMENT = window.WARP_ENVIRONMENT || '<?=(ENV)?>';
		window.WARP_TIMESTAMP = window.WARP_TIMESTAMP || '<?=(TIMESTAMP)?>';
		window.CMS_TOKEN = window.CMS_TOKEN || '<?=($ss -> get_token())?>';
	</script>

</head>
<body class="page">

<div class="app" id="App">
	<div style="
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	">
		<div style="
			width: auto;
			height: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		">
			Loading view
		</div>
	</div>
</div>

<script src="<?=(VIEW['ADMIN']['scripts'] . '?v=' . TIMESTAMP) ?>"></script>

</body>
</html>

