<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Udemy Javascript</h1>
    <?php
    $directory = "./JS Udemy";

if (is_dir($directory)){
  if ($opendirectory = opendir($directory)){
    while (($file = readdir($opendirectory)) !== false){
      echo "<a href='http://eloumbatassouaalbert.com/$directory" . "$file'>$file</a>"."<br>";
    }
    closedir($opendirectory);
  }
}
?>
    <h1>
        Youtube videos
    </h1>
    <?php
$directory = "./";

if (is_dir($directory)){
  if ($opendirectory = opendir($directory)){
    while (($file = readdir($opendirectory)) !== false){
      echo "<a href='http://eloumbatassouaalbert.com/$directory" . "$file'>$file</a>"."<br>";
    }
    closedir($opendirectory);
  }
}
?>


</body>

</html>