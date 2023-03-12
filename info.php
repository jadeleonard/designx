<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST["email"];
  $password = $_POST["password"];
  $confirm_password = $_POST["confirm_password"];
  $location = $_POST["location"];
  
  if ($password != $confirm_password) {
    echo "Error: Passwords do not match.";
  } else {
    // Insert user data into database or handle as needed
    echo "Registration successful!";
  }
}

?>
