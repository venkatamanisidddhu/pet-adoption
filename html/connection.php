<?php
$host = "localhost:3307";     
$user = "root";         
$password = "";          
$database = "petadoption";  


$conn = mysqli_connect($host, $user , $password,  $database);

if ($conn) {
    // echo "✅ Connected successfully!";  
} else {
     mysqli_connect_error(); 
}


?>
