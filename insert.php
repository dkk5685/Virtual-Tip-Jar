<?php
header( "refresh:5;url=index.html" );

// MySQLi or PDO
$link = mysqli_connect('localhost', 'globmoba_dani', 'master2020', 'globmoba_costipjar');
mysqli_query($link, "SET SESSION sql_mode = ''");

// Check Connection
if (!$link) {
      die("Connection failed: " . mysqli_connect_error());
}

// Attempt insert query execution

$name = ($_POST['name']);
$position = ($_POST['position']);
$company = ($_POST['company']);
$location = ($_POST['location']);
$email = ($_POST['email']);
$payment = ($_POST['payment']);
$venmo = ($_POST['venmo']);
$paypal = ($_POST['paypal']);
$code = ($_POST['code]);


$sql = "INSERT INTO tipjar (name, position, company, location, email, payment, venmo, paypal, code)
VALUES ('$_POST[name]','$_POST[position]','$_POST[company]','$_POST[location]','$_POST[email]','$_POST[payment]','$_POST[venmo]','$_POST[paypal]','$_POST(code)')";

if(mysqli_query($link, $sql)) {
    echo "Records added successfully.";
}

else

{
echo "Error: " . $sql . "<br>" . mysqli_error($link);
}

// Close connection
mysqli_close($link);
?>
